import { Flex, Heading, Text, Image } from "@chakra-ui/react";

function Banner() {
    return (
        <Flex
         h={["163px", "250px", "250px", "335px"]}
         bgImage="url('/background.png')"
         bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
         bgRepeat="no-repeat"
         bgSize="cover"
        >
            <Flex
                justify={['center', 'space-between']}
                align="center"
                w="100%"
                mx="auto"
                px={["4", "10", "15", "20", "36"]}
            >
                <div>
                    <Heading color="gray.100" fontWeight="500"
                        fontSize={["xl", "2l", "2xl", "4xl"]}
                    >
                        5 continentes, <br />infinitas possibilidades.
                    </Heading>
                    <Text color="gray.300" mt="5" fontSize={["0.8rem", "xl"]}
                        maxW={["100%", "100%", "100%", "550px"]}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </div>
                <Image 
                    w={["300px", "300px", "300px", "430px"]}
                    display={['none', 'none', 'block']}
                    src="/airplane.png"
                    alt="Avião voando"
                    transform="translateY(48px)"
                />
            </Flex>
        </Flex>
    )
}

export default Banner;