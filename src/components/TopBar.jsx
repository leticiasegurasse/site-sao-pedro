import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import Container from './Container';

const TopBar = () => {
    return (
        <div className="bg-red-600 text-white py-2 text-sm border-b border-red-500">
            <Container>

                {/* Versão Desktop */}
                <div className="hidden md:flex md:justify-between md:items-center gap-4">

                    {/* Telefone */}
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-white flex-shrink-0" />
                        <a
                            href="tel:03236964444"
                            className="font-semibold text-white hover:text-red-100 transition-colors"
                        >
                            (032) 3696-4444
                        </a>
                    </div>

                    {/* Endereço */}
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                        <span className="text-white">
                            Rodovia BR 116 - KM 710, MURIAÉ - MG
                        </span>
                    </div>

                    {/* Horário */}
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white flex-shrink-0" />
                        <span className="text-white">
                            <span className="font-medium">SEG - SEX 8:00 - 17:00</span>
                        </span>
                    </div>

                </div>

                {/* Versão Mobile - Apenas telefone em destaque */}
                <div className="flex md:hidden justify-between items-center">

                    {/* Telefone */}
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-white flex-shrink-0" />
                        <a
                            href="tel:03236964444"
                            className="font-semibold text-white hover:text-red-100 transition-colors"
                        >
                            (032) 3696-4444
                        </a>
                    </div>

                    {/* Horário resumido */}
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white flex-shrink-0" />
                        <span className="text-white font-medium text-xs">
                            SEG - SEX 8:00 - 17:00
                        </span>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default TopBar;

