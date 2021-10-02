export default (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, s-maxage=3000')
  next()
}
