import styled from 'styled-components'

interface CardProps {
fact : string
}

export default function Card({fact}: CardProps) {
return (
    <Wrapper>
<h2>{fact}</h2>
    </Wrapper>
)
}
const Wrapper = styled.section`
margin: 30px;
padding: 10px;
border: 1px solid var(--color-highlight);
border-radius: 10px;
`