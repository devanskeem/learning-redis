import styles from '../styles/Home.module.css'

export default function CarForm(){
    const handleSubmit = async event =>{
        event.preventDefault()
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries())

        console.log(formData)

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },
            method: 'POST'
        })

        const result = await res.json();
        console.log('result', result)
    }
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input name='make' placeholder='Make' type='text' className={styles.input}/>
            <input name='model' placeholder='Model' type='text'className={styles.input}/>
            <input name='image' type='text'placeholder='Image URL' className={styles.input}/>
            <textarea name='description' placeholder='Description of the vehicle.' type='text'className={styles.textbox}/>

            <button type='submit'>Create Car</button>

        </form>
    )
}