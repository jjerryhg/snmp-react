import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    }

    return ( 
        <div className='language-switch'>
                    <select>
                        <option value='en' onClick={() => handleLanguageChange('en')}>
                            English
                        </option>
                        <option value='zh' onClick={() => handleLanguageChange('zh')}>繁體中文</option>
                        <option value='ch' onClick={() => handleLanguageChange('ch')}>簡體中文</option>
                    </select>
            </div>
     );
}
 
export default LanguageDropdown;