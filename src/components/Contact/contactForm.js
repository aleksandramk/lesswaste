import React, {useState, useEffect} from "react";


const ContactForm = () => {
    const [name, setName] = useState("Krzysztof");
    const [email, setEmail] = useState("abc@xyz.pl");
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

    const [errors, setErrors] = useState([]);
    const [errorsSer, setErrorsSer] = useState([]);
    const [completed, setCompleted] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let error = [];

        if (name.indexOf(" ") > 0) {
            error.push("Podane imię jest nieprawidłowe!")
        }
        if ((email.indexOf("@") < 0) || (email.length < 3)) {
            error.push("Podany email jest nieprawidłowy!")
        }
        if (text.length < 120) {
            error.push("Wiadomość musi mieć conajmniej 120 znaków!")
        }

        setErrors(errors);
        if (error.length < 1) {
            const newData = {
                name,
                email,
                text
            };
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: "POST",
                body: JSON.stringify(newData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(() => setCompleted("Operation completed!"))
                    } else {
                        alert(`Nie udało się dodać danych`);

                    }
                })
                .catch(err => setErrorsSer(err));
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="contactForm">
                
                <div className="person-data">
                
                    <label>Wpisz swoje imię
                        <textarea className="form-control" type="text" name="name" value={name}
                            onChange={e => setName(e.target.value)}/>
                    </label>

                    <label>Wpisz swój email
                        <textarea className="form-control" type="email" name="email" value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </label>

                 </div>
             

                <label>Wpisz swoją wiadomość
                    <textarea className="yourText form-control" value={text} onChange={e => setText(e.target.value)}/>
                </label>
                <input className="btn-submit" type="submit" value="Wyślij"/>
            </form>

        </>
    )
};

export default ContactForm; 