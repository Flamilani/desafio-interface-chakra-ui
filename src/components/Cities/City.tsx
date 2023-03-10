import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
    return (
        <>
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/londres.png" h="170px" w="100%" />
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Reino Unido</Text>
                </Flex>
                <Image src="/reino.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/roma.png" h="170px" w="100%" />
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Roma</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Itália</Text>
                </Flex>
                <Image src="/italia.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/paris.png" h="170px" w="100%" />
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Paris</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">França</Text>
                </Flex>
                <Image src="/franca.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/praga.png" h="170px" w="100%" />
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Praga</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">República Tcheca</Text>
                </Flex>
                <Image src="/tcheca.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/amsterda.png" h="170px" w="100%" />
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Amsterdã</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Holanda</Text>
                </Flex>
                <Image src="/holanda.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
        </>

    )
}