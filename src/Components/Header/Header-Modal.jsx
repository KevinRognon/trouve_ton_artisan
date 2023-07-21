import './header-modal.scss';
import {useEffect, useState} from "react";
import {gsap} from "gsap";

export default function HeaderModal ({showModal, setModalState}) {


    useEffect(() => {
        !showModal
        ?
            closeModal()
        :
            openModal()
    }, [showModal])

    function closeModal () {
        gsap.to(".overlay", {display: "none", duration: 0})
        setModalState();
    }

    function openModal () {
        gsap.to(".overlay", {display: "flex", duration: 0})
    }

    function HandleInput (e) {
        e.stopPropagation();
    }

    function HandleSubmit(e) {
        e.preventDefault();
        closeModal();
    }

    return (
        <div className="overlay" onClick={closeModal}>
            <div className="searchbar_modal">
                <form onSubmit={HandleSubmit}>
                    <h1>Recherchez votre artisan</h1>
                    <input onClick={HandleInput} placeholder="Recherchez un artisan" type="text"/>
                </form>
            </div>
        </div>
    )
}