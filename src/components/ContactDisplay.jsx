import React from 'react';
import { Phone, MapPin, Mail, Building, Users } from 'lucide-react';

const ContactDisplay = ({ contato, index, isExpanded = true }) => {
  // Função para organizar telefones
  const getPhones = (contato) => {
    const phones = [];
    
    // Telefone principal
    if (contato.telefone) {
      phones.push({
        number: contato.telefone,
        contact: contato.nome || 'Principal',
        isPrimary: true
      });
    }
    
    // Telefones adicionais
    for (let i = 2; i <= 4; i++) {
      const phoneKey = `telefone${i}`;
      const contactKey = `contato${i}`;
      
      if (contato[phoneKey]) {
        phones.push({
          number: contato[phoneKey],
          contact: contato[contactKey] || `Contato ${i}`,
          isPrimary: false
        });
      }
    }
    
    // Telefone fixo
    if (contato.telefoneFixo) {
      phones.push({
        number: contato.telefoneFixo,
        contact: 'Fixo',
        isPrimary: false,
        isFixed: true
      });
    }
    
    return phones;
  };

  // Função para organizar emails
  const getEmails = (contato) => {
    const emails = [];
    
    if (contato.email) {
      emails.push({
        address: contato.email,
        label: 'Principal'
      });
    }
    
    if (contato.email2) {
      emails.push({
        address: contato.email2,
        label: 'Secundário'
      });
    }
    
    return emails;
  };

  const phones = getPhones(contato);
  const emails = getEmails(contato);

  if (!isExpanded) {
    return (
      <div className="text-sm text-gray-600">
        {contato.cidade} • {phones.length} telefone{phones.length > 1 ? 's' : ''} • {emails.length} email{emails.length > 1 ? 's' : ''}
      </div>
    );
  }

  return (
    <div className={`${index > 0 ? 'pt-4 border-t border-gray-200' : ''}`}>
      {/* Nome do representante */}
      {contato.nome && (
        <div className="flex items-center gap-2 text-gray-800 font-medium mb-3">
          <Building className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span className="text-sm font-semibold">{contato.nome}</span>
        </div>
      )}
      
      {/* Região de cobertura */}
      {contato.regiao && (
        <div className="flex items-start gap-2 text-gray-700 mb-2">
          <Users className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <span className="text-xs text-gray-600 italic">{contato.regiao}</span>
        </div>
      )}
      
      {/* Cidade */}
      <div className="flex items-center gap-2 text-gray-700 mb-2">
        <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
        <span className="text-sm">{contato.cidade}</span>
      </div>
      
      {/* Telefones */}
      <div className="space-y-1 mb-2">
        {phones.map((phone, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-700">
            <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <a 
                href={`tel:${phone.number.replace(/[^\d]/g, '')}`} 
                className="text-sm hover:text-red-600 transition-colors font-medium"
              >
                {phone.number}
              </a>
              {!phone.isPrimary && (
                <span className="text-xs text-gray-500">
                  ({phone.contact}{phone.isFixed ? ' - Fixo' : ''})
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Emails */}
      <div className="space-y-1 mb-2">
        {emails.map((email, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-700">
            <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <a 
                href={`mailto:${email.address}`} 
                className="text-sm hover:text-red-600 transition-colors break-all"
              >
                {email.address}
              </a>
              {emails.length > 1 && (
                <span className="text-xs text-gray-500">({email.label})</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Endereço */}
      <div className="text-xs text-gray-600 mt-2">
        📍 {contato.endereco}
      </div>
    </div>
  );
};

export default ContactDisplay;
