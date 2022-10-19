import { Flex, Text } from "@chakra-ui/react"
import prisma from "../clients";

export const getServerSideProps = async ({params}) => {

  
        
    const urls = await prisma.link.findMany({
        where: {
            linkId: params.slug,
        }
    });

  


    return {
       redirect: {
        destination: urls[0].url
       }
    }
}

const LinkID = ({data}) => {

    return (
        <Flex>
            <Text>{data}</Text>
        </Flex>
    )
}

export default LinkID;