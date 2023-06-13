export type BankingBrands = 'Up' | 'NAB' | 'CBA' | 'ANZ' | 'Westpac' | 'Macquarie'

export type PaymentBrands = 'Applepay' | 'Googlepay' | 'Paypal' | 'Credit Card'

export type RadioSelectorGroups = 'paymentbrands' | 'bankingbrands'

export type Theme = 'Up' | 'NAB' | 'CBA' | 'ANZ' | 'Westpac' | 'Macquarie'

export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}
