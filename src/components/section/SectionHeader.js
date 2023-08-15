import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class SectionHeader extends Component {
  render() {
    return (
        <div class="container">
        <div class="section_header">
            <NavLink href="">ГЛАВНАЯ /</NavLink>
            <NavLink href="">О НАС /</NavLink>
            <NavLink class="bautex" href="">О BAUTEX DESIGN</NavLink>
            <h1>BAUTEX DESIGN - это жаккардовые обои из кварцевой нити</h1>
        </div>
        <div class="flex_container">
            <div class="flex_card1">
                <p>Жаккардовые обои – это особо прочный тканный материал, который позволяет стенам «дышать» и
                    препятствует образованию плесени и грибка.

                    Жаккардовые обои BauTex Design создаются из специальной кварцевой нити, которая на 100% состоит
                    их экологически чистых материалов и безвредна даже для детей и людей с различными аллергическими
                    реакциями. Обои ткутся на специальных жаккардовых станках, что позволяет сделать индивидуальный
                    рисунок по вашему заказу.
                </p>
                <p class="p2">
                    Компания BauTex является единственным производителем обоев из кварцевой нити в России!
                </p>
            </div>
            <div class="flex_card2">
                <img src="./images/Rectangle 150.jpg" alt="#"/>
            </div>
        </div>
        <div class="container">
            <div class="category_section">
                <div class="grid_container">
                    <div class="grid_card">
                        <img src="./images/eco 2.jpg" alt=""/>
                        <h2>Антивандальные</h2>
                        <p>Обоям не страшны механические повреждения, в том числе и когти домашних животных</p>
                    </div>
                    <div class="grid_card">
                        <img src="./images/eco 3.png" alt=""/>
                        <h2>Гипоаллергенные</h2>
                        <p>Обои не вызывают аллергию и сохраняют баланс влажности в помещении</p>
                    </div>
                    <div class="grid_card">
                        <img src="./images/eco 1.png" alt=""/>
                        <h2>Экологичные</h2>
                        <p>Обои на 100% состоят из натуральных природных материалов</p>
                    </div>
                    <div class="grid_card">
                        <img src="./images/eco 4.png" alt=""/>
                        <h2>Защищают от трещин</h2>
                        <p>Обои отлично сдерживают образование трещин на стенах и идеально подходят для новостроек
                        </p>
                    </div>
                    <div class="grid_card">
                        <img src="./images/eco 5.png" alt=""/>
                        <h2>Можно мыть</h2>
                        <p>Обои не только можно мыть с чистящими средствами, но и использовать их в помещениях с
                            повышенной
                            влажностью</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default SectionHeader
