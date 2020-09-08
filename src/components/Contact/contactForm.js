import React, {useState, useEffect} from "react";


const ContactForm = () => {
    const [name, setName] = useState("Krzysztof");
    const [email, setEmail] = useState("abc@xyz.pl");
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

    const [errors, setErrors] = useState({name:""});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setErrors([])

        if (name.indexOf(" ") > 0 || name.length <= 2 ) {
            setErrors(prev => [...prev, "Name should be at least 2 characters long."])
        }
        if (email.indexOf("@") < 0 && email.length < 3) {
            setErrors(prev => [...prev, "Email should be valid."])
        }
        if (text.length < 120) {
            setErrors(prev => [...prev, "Message should be at least 120 characters long."])
        }

        if (errors.length === 0) {
            const newMessage = {
                name: name,
                email: email,
                message: text
            }
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: "POST",
                body: JSON.stringify(newMessage),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(item => console.log(item))
                    } else {
                        alert(`Nie udało się dodać danych`);

                    }
                })
                .catch(err => console.error(err));
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
                    <p>{errors.name}</p>

                    <label>Wpisz swój email
                        <textarea className="form-control" type="email" name="email" value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </label>

                 </div>
             

                <label>Wpisz swoją wiadomość
                    <textarea className="yourText form-control" value={text} onChange={e => setText(e.target.value)}/>
                </label>
                <button className="btn-submit" type="submit">Wyślij</button>
            </form>

        </>
    )
};

export default ContactForm; 