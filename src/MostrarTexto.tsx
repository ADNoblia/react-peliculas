interface MostrarTextoProps {
    texto: string
}

export default function MostrarTexto(props: MostrarTextoProps) {
    return (
        <p>Haz escrito: {props.texto}</p>
    );

}