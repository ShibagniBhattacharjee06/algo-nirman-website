import React, { useState } from 'react';

const AccessibilityMenu = ({
    isHighContrast, toggleHighContrast,
    isGrayscale, toggleGrayscale,
    fontSize, setFontSize,
    isAnimationsDisabled, toggleAnimations
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 'var(--spacing-md)',
            right: 'var(--spacing-md)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: 'var(--color-accent)', /* Saffron accent */
                    color: 'var(--color-strategic-dark)', /* Dark text for contrast */
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '1.8rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    transition: 'transform var(--transition-fast)',
                }}
                title="Accessibility Menu"
            >
                ♿
            </button>
            {isOpen && (
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid var(--color-accent)', /* Saffron accent border */
                    borderRadius: 'var(--border-radius-md)',
                    padding: 'var(--spacing-sm)',
                    marginTop: 'var(--spacing-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-xs)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                }}>
                    <button
                        onClick={toggleHighContrast}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isHighContrast ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                            color: isHighContrast ? 'var(--color-strategic-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                        }}
                    >
                        High Contrast {isHighContrast ? '✅' : '❌'}
                    </button>
                    <button
                        onClick={toggleGrayscale}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isGrayscale ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                            color: isGrayscale ? 'var(--color-strategic-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                        }}
                    >
                        Grayscale {isGrayscale ? '✅' : '❌'}
                    </button>
                    <div style={{ display: 'flex', gap: 'var(--spacing-xs)', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-text-primary)' }}>Font Size:</span>
                        <button
                            onClick={() => handleFontSizeChange('normal')}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: fontSize === 'normal' ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: fontSize === 'normal' ? 'var(--color-strategic-dark)' : 'var(--color-text-primary)',
                                border: 'none',
                                borderRadius: 'var(--border-radius-sm)',
                                cursor: 'pointer',
                                transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            }}
                        >
                            A
                        </button>
                        <button
                            onClick={() => handleFontSizeChange('large')}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: fontSize === 'large' ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: fontSize === 'large' ? 'var(--color-strategic-dark)' : 'var(--color-text-primary)',
                                border: 'none',
                                borderRadius: 'var(--border-radius-sm)',
                                cursor: 'pointer',
                                transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            }}
                        >
                            A+
                        </button>
                        <button
                            onClick={() => handleFontSizeChange('xlarge')}
                            style={{
                                padding: 'var(--spacing-xs) var(--spacing-sm)',
                                backgroundColor: fontSize === 'xlarge' ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                                color: fontSize === 'xlarge' ? 'var(--color-strategic-dark)' : 'var(--color-text-primary)',
                                border: 'none',
                                borderRadius: 'var(--border-radius-sm)',
                                cursor: 'pointer',
                                transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                            }}
                        >
                            A++
                        </button>
                    </div>
                    <button
                        onClick={toggleAnimations}
                        style={{
                            padding: 'var(--spacing-xs) var(--spacing-sm)',
                            backgroundColor: isAnimationsDisabled ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                            color: isAnimationsDisabled ? 'var(--color-strategic-dark)' : 'var(--color-text-primary)',
                            border: 'none',
                            borderRadius: 'var(--border-radius-sm)',
                            cursor: 'pointer',
                            transition: 'background-color var(--transition-fast), color var(--transition-fast)',
                        }}
                    >
                        Animations {isAnimationsDisabled ? 'Off 🚫' : 'On ✅'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccessibilityMenu;