export const images = Object.values(
  import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', { eager: true })
).map(m => m.default);