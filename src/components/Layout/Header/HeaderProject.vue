<template>
    <div class="header">
        <div class="container">
            <div class="header-main">
                <div class="header-main__logo">
                    <img src="../../../assets/header/logo.svg" alt="" class="header-logo">
                </div>
                <div class="header-main__btns btns-header-main">
                    <a class="btns-header-main__btn" :href="item.path" v-for="(item, i) of menu" :key="i">{{ item.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const menu = [
    {
        name: 'Форма',
        path: '/forms'
    },
    {
        name: 'Превью',
        path: '/preview'
    }
]
</script>

<style lang="scss" scoped src="./HeaderProject.scss" />