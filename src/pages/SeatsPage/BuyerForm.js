import { FormContainer } from "./styled"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function BuyerForm ({ selectedSeats, setSuccessInfo, session }) {
    const [form, setForm] = useState({ name: "", cpf: "" })
    const [disableButton, setDisableButton] = useState("true")

    const navigate = useNavigate()

    useEffect(() => {
        if (form.name && form.cpf && selectedSeats.length > 0) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [selectedSeats, form])

    function handleForm(e) {
        const {name, value} = e.target

        setForm({...form, [name]: value})
    }

    function buyTicket(e) {
        e.preventDefault()

        const arraySelectedSeats = selectedSeats.map(s => s.id)        
        const newForm = {...form, ids: arraySelectedSeats} 

        console.log(newForm)

        axios.post(`${BASE_URL}/seats/book-many`, newForm)
            .then(res => {
                const info = {
                    movie: session.movie.title,
                    date: session.day.date,
                    hour: session.name,
                    buyer: form.name,
                    cpf: form.cpf,
                    seats: selectedSeats.map(s => s.name)
                }
                
                console.log("info saindo do BuyerForm")
                console.log(info)

                setSuccessInfo(info)

                navigate("/sucesso")
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <FormContainer onSubmit={buyTicket}>
            <label htmlFor="name">Nome do Comprador:</label>
            <input 
                id="name" 
                placeholder="Digite seu nome..."
                name="name"
                value={form.name} 
                onChange={handleForm}
                required
            />

            <label htmlFor="cpf">CPF do Comprador:</label>
            <input 
                id="cpf" 
                placeholder="Digite seu CPF..."
                name="cpf"
                value={form.cpf}
                onChange={handleForm}
                required
            />

            <button type="submit" disabled={disableButton}>Reservar Assento(s)</button>
        </FormContainer>
    )
}