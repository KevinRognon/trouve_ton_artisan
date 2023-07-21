import './header-modal.scss';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export default function HeaderModal ({showModal, setModalState}) {

    const recherche = useRef(null);


    useEffect(() => {
        !showModal
        ?
            closeModal()
        :
            openModal()
    }, [showModal])

    function closeModal () {
        gsap.to(".overlay",
            {left: "+100%", ease: "power4", duration: 0.5}
        )
        setModalState();
    }

    function openModal () {
        gsap.to(".overlay",
            {left: "0", ease: "power4", duration: 0.5}
        )
    }

    function HandleInput (e) {
        e.stopPropagation();
    }

    function HandleSubmit(e) {
        e.preventDefault();
        console.log(recherche.current.value = "");
        closeModal();
    }


    return (
        <div className="overlay" onClick={closeModal}>
            <div className="searchbar_modal">
                <form onSubmit={HandleSubmit}>
                    <h1>Recherchez votre artisan</h1>
                    <input ref={recherche} onClick={HandleInput} placeholder="Recherchez un artisan" type="text"/>
                    <button type="submit" className="btn-rechercher btn">Rechercher</button>
                    <button onClick={closeModal} className="btn-fermer btn btn-danger">Fermer</button>
                </form>
            </div>
        </div>
    )
}