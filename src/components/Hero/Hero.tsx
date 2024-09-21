import Container from "../Container/Container";

interface HeroProps extends React.ComponentPropsWithoutRef<"img"> {}

let Hero : React.FC<HeroProps> = ({className, ...rest}) => {
    return (
        <div className={"my-class " + (className || "")} {...rest}>
            <Container>text</Container>
        </div>
    )
}

export default Hero;