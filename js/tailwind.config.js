// js/tailwind.config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brown-main': '#8B5E3C',
                'brown-dark': '#5D4037',
                'brown-light': '#D7CCC8',
                'bg-white': '#FAFAFA',
                'pure-black': '#1A1A1A',
            },
            fontFamily: {
                'serif': ['"Playfair Display"', 'serif'],
                'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            backgroundImage: {
                'mesh': 'radial-gradient(at 40% 20%, hsla(28,100%,85%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,90%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(340,100%,90%,0.3) 0px, transparent 50%)',
            }
        }
    }
}