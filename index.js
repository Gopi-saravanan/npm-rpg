const generateRandomPassword = (length = 12, options = {}) =>  {
    const defaults = {
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false
    };

    options = Object.assign({}, defaults, options);

    let charset = '';
    if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) charset += '0123456789';
    if (options.symbols) charset += '!@#$%^&*()-_+=<>?';

    if (options.excludeSimilarCharacters) {
        charset = charset.replace(/[ilLI|`oO0]/g, '');
    }
    if (options.excludeAmbiguousCharacters) {
        charset = charset.replace(/[{}()[\]/\\'";:.,<>~]/g, '');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

