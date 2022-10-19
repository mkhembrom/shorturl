import prisma from '../../clients';

export default async function handler(req, res) {

    const { link } = req.body;

    const existingLink = await prisma.link.findUnique({
        where: {
            url: link
        }
    })

    if(existingLink) {
        res.status(201).json(existingLink.linkId)
    }

    const id = Math.random().toString(36).substring(2,8);
    
   try {
    const addLink = await prisma.link.create({
        data: {
            url: link,
            linkId: id
        }
    })
   } catch (err) {
    console.log(err);
   }
    res.status(200).json(id);
}