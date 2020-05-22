module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      }
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          borderColor: 'transparent',
        }
      }
      // default: {
      //   input: {
      //     borderRadius: theme('borderRadius.lg'),
      //     backgroundColor: theme('colors.gray.200'),
      //     '&:focus': {
      //       backgroundColor: theme('colors.white'),
      //     }
      //   },
      //   select: {
      //     borderRadius: theme('borderRadius.lg'),
      //     boxShadow: theme('boxShadow.default'),
      //   },
      //   checkbox: {
      //     width: theme('spacing.6'),
      //     height: theme('spacing.6'),
      //   },
      // },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
