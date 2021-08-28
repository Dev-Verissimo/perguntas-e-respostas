import axios from 'axios'
import React from 'react'

const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount='
})

const qs = require('qs')