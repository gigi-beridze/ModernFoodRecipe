import "../style/contact.css"

const Contact = () => {
    return (
        <div className="contact">
             <div className="header">
        <h2>დაგვიკავშირდით</h2>
    </div>
    <div className="container">
        <div className="contact-info">
            <div className="contact-info-block">
                <div className="rounded">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
            </div>
            <div className="contact-info-block">
                <div className="rounded">
                    <i className="fas fa-phone"></i>
                </div>
            </div>
            <div className="contact-info-block">
                <div className="rounded">
                    <i className="fas fa-paper-plane"></i>
                </div>
            </div>
            <div className="contact-info-block">
                <div className="rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -30 700 550"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                </div>
            </div>
        </div>
        <div className="contact-us-form">
            <div className="ganivi-location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1644474614877!2d44.719362515435954!3d41.71697017923518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447371b40dc741%3A0xaa9f66639d890960!2z4YOX4YOh4YOjIOGDm-GDlC0xMSDhg5nhg53hg6Dhg57hg6Phg6Hhg5ggKOGDkuGDkOGDnOGDmOGDleGDmCk!5e0!3m2!1ska!2sge!4v1682189836836!5m2!1ska!2sge" width="600" height="500" loading="lazy" ></iframe>
            </div>
            <div className="send-msg">
                <div className="text-header">
                    <h3>დაგვიტოვეთ შეტყობინება</h3>
                </div>
                <div className="send-form">
                    <form action="" method="">
                        <div className="form-group">
                            <label for="name">სახელი:</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="form-group">
                            <label for="email">მეილი:</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label for="message">შეტყობინება:</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group btn">
                           <button type="submit" >გაგზავნა</button>
                           <div id="snackbar">შეტყობინება წარმატებით გაიგზავნა</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Contact