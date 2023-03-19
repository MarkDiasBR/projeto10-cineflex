import { FormContainer } from "./styled"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { testaCPF } from "./testaCpf"

export default function BuyerForm ({ selectedSeats, setSuccessInfo, session }) {
    const [form, setForm] = useState({ name: "", cpf: "" })
    const [disableButton, setDisableButton] = useState("true")

    const navigate = useNavigate()

    useEffect(() => {
        if (form.name && form.cpf && selectedSeats.length > 0 && testaCPF(form.cpf)) {
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

                setSuccessInfo(info)

                navigate("/sucesso")
            })
            .catch(err => alert(err.response.data.message))
    }

    function handleKeyDownLetras(event) {
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            event.preventDefault();
        }
    }

    function handleKeyDownNumeros(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            event.preventDefault();
        }
    }

    return (
        <FormContainer onSubmit={buyTicket}>
            {selectedSeats.map(seat => (
                <>
                    <label htmlFor="name">Nome do Comprador:</label>
                    <input 
                        id="name" 
                        placeholder="Digite seu nome..."
                        type="text"
                        name="name"
                        onKeyDown={handleKeyDownLetras}
                        pattern="[a-zA-Z .-']+"
                        value={form.name} 
                        onChange={handleForm}
                        required
                    />

                    <label htmlFor="cpf">CPF do Comprador:</label>
                    <input 
                        id="cpf" 
                        placeholder="Digite seu CPF..."
                        type="text"
                        minLength="11"
                        maxLength="11"
                        onKeyDown={handleKeyDownNumeros}
                        pattern="[0-9]+"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleForm}
                        required
                    />
                </>
            ))}


            <button type="submit" disabled={disableButton}>Reservar Assento(s)</button>
        </FormContainer>
    )
}