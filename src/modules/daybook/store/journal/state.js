export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus commodi, culpa quo rem nesciunt illum quasi',
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: '2222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus commodi, culpa quo rem nesciunt illum quasi',
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: '3333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus commodi, culpa quo rem nesciunt illum quasi',
            picture: null,
        },
    ]
})