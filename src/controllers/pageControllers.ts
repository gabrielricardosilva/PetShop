import {Request, Response} from 'express'
import { createMenuObjects } from '../helpers/createMenuObjects'
import { Pet } from '../models/pet'

export const home = (req:Request, res:Response) =>{
    
    let list = Pet.getAll()

    res.render("pages/pages",{
        menu:createMenuObjects('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req:Request, res:Response) =>{
    let list = Pet.getFromType('dog')
    res.render("pages/pages",{
        menu:createMenuObjects('dog'),
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        },
        list
    })
}


export const cats = (req:Request, res:Response) =>{
    let list = Pet.getFromType('cat')

    res.render("pages/pages",{
        menu:createMenuObjects('cat'),

        banner: {
            title: 'Cats',
            background: 'banner_cat.jpg',
        },
        list
    })
}


export const fishes = (req:Request, res:Response) =>{
    let list = Pet.getFromType('fish')

    res.render("pages/pages",{
        menu:createMenuObjects('fish'),

        banner: {
            title: 'Fishes',
            background: 'banner_fish.jpg',
        },
        list
    })
}


