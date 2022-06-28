// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function create(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default {
    create
}