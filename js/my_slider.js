let lecturePath = '../Photos/Lectures/'
let slidersData = [
    {
        title: 'Геометрична інтерпретація множин',
        strongTitle: 'Лекція 1. ',
        lectureNumber: 1,
        lectureAnchor: 'MOL',
        lectureName: 'Lecture1',
        lectureImages: [
            'Slide6.JPG',
            'Slide1.JPG',
            'Slide2.JPG',
            'Slide3.JPG',
            'Slide4.JPG',
            'Slide5.JPG',
            'Slide6.JPG',
            'Slide1.JPG',
        ]
    },
]

let sldr = document.getElementsByClassName('slider_main')

let sldrArray = [ ...sldr ]
sldrArray.forEach(slider => {
    let lectureNumber = +slider.dataset.lectureNumber
    if (lectureNumber) {
        // console.log("lectureNumber =", lectureNumber)
        // console.log("slider =", slider)
        let sliderData = slidersData.find(data => data.lectureNumber === lectureNumber)
        // console.log("sliderData.lectureName =", sliderData.lectureName)
        let lecture = document.getElementById(sliderData.lectureName)
        let sliderHeader = document.createElement('div')
        sliderHeader.classList.add('slider_header')
        let strong = document.createElement('strong')
        strong.innerText = sliderData.strongTitle
        sliderHeader.innerText = sliderData.title
        sliderHeader.prepend(strong)
        let sliderHeader2 = document.createElement('div')
        sliderHeader2.classList.add('slider_container')
        sliderHeader2.id = `${sliderData.lectureAnchor}_${sliderData.lectureName}`
        lecture.appendChild(sliderHeader)

        // lecture.appendChild(sliderHeader2)
        // console.log('sliderData = ', sliderData)
        let sliderContainer = document.createElement('div')
        sliderContainer.classList.add('my_sldr')
        sliderData.lectureImages.forEach(imageName => {
            let image = document.createElement('img')
            image.src = `${lecturePath}${sliderData.lectureAnchor}/${sliderData.lectureName}/${imageName}`
            // console.log('image.src = ', image.src)
            sliderContainer.appendChild(image)
            // console.log('sliderContainer.style = ', sliderContainer.style)
        })
        let sl_ctr = document.createElement('div')
        sl_ctr.classList.add('sl_ctr')
        sl_ctr.appendChild(sliderContainer)
        sliderHeader2.appendChild(sl_ctr)
        lecture.appendChild(sliderHeader2)
        let slideWidth = sl_ctr.getBoundingClientRect().width
        sliderContainer.style.marginLeft = `-${slideWidth}px`
        let sldrInterval = 5000
        let animateTime = 1000
        let course = 1
        let margin = - slideWidth
        // let slideCount = sliderData.lectureImages.length
        let slideCount = 6
        const animate = () => {
            // console.log('sliderContainer.style.marginLeft = ', sliderContainer.style.marginLeft)
            console.log('margin =', margin)
            // console.log('slideCount =', slideCount)
            // console.log('course =', course)
            // sliderContainer.style.marginLeft = `${margin}px`
            if (margin == -(slideCount + 1) * slideWidth){
                // console.log(1)
                sliderContainer.style.marginLeft = `${margin}px`
                margin = -slideWidth * 2
            } else if (margin==0&&course==-1){
                // console.log(2)
                sliderContainer.style.marginLeft = `-${slideWidth * slideCount}px`
                margin = -slideWidth * slideCount + slideWidth
            } else {
                // console.log(3)
                margin = margin - slideWidth
            }

            console.log('margin =', margin)
            sliderContainer.animate({'marginLeft': `${margin}px`},{duration: animateTime})

            // sliderContainer.style.marginLeft = `${margin}px`
            // console.log('${margin}px =', `${margin}px`)
            // console.log('sliderContainer.style.marginLeft =', sliderContainer.style.marginLeft)
        }

        const nxt_bSlide = () => {
            interval = window.setInterval(animate, sldrInterval)
        }
        nxt_bSlide()
        // console.log(slideWidth)

    }
})