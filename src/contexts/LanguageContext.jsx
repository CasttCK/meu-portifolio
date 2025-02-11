import { createContext, useState, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import ptBR from '../translations/pt-BR.json';
import enUS from '../translations/en-US.json';

const LanguageContext = createContext();

const messages = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('pt-BR');

  const toggleLanguage = () => {
    setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR');
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      <IntlProvider messages={messages[locale]} locale={locale}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext); 