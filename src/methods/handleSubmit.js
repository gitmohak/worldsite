const handleSubmit = (event, modalRef, setresultText, emailjs, contactForm) => {
    event.preventDefault();
    modalRef.current.click();

    setresultText({
        title: "Please Wait",
        description: "Your message is being delivered."
    });

    emailjs.sendForm('service_0wcmgnv', 'template_ulzc5a7', contactForm.current, 'O0wEfR0CHzgJz00pr')
        .then(() => {
            setresultText({
                title: "SUCCESS",
                description: "Your message has been delivered. We will respond back shortly."
            });

        }, (error) => {
            setresultText({
                title: "ERROR",
                description: `A problem has occurred while sending your message - ${error.text}`
            });
        });

    setTimeout(() => {
        document.getElementById("senderName").value = "";
        document.getElementById("senderEmail").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("sender-msg").value = "";
    }, 0);
}

export default handleSubmit;