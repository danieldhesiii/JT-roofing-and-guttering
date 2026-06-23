// Small helper: render an SVG sprite icon by id (without the `i-` prefix).
export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" aria-hidden="true"><use href="/sprite.svg#i-${name}"></use></svg>`

export default icon
