import appointment_img from './appointment_img.png'
import header_img from './header_image_1.png'
import group_profiles from './group_profiles.png'
import profile_pic from './account.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import bar1 from './Ferry.png'
import bar2 from './Rose.png'
import bar3 from './Root.png'
import bar4 from './Kemedith.png'
import bar5 from './Leviston.png'
import bar6 from './Andrea.png'
import bar7 from './Harry.png'
import bar8 from './Sony.png'
import bar9 from './Jimmy.png'
import bar10 from './Exsty.png'
import bar11 from './Anisha.png'
import bar12 from './Broad.png'
import bar13 from './Zara.png'
import Haircut from './Precision_Hair_Cut.png'
import HairColour from './Balayage_and_Colouring.png'
import Treatment from './Keratin Treatement.png'
import Extention from './Blowout_and_Styling.png'
import Scalp from './Scalp_and_haircare.png'
import MensGroom from './Mens_Grooming.png'
import Styling from './Hair_treatment.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Haircut',
        image: Haircut
    },
    {
        speciality: 'Hair Colouring',
        image: HairColour
    },
    {
        speciality: 'Treatment',
        image: Treatment
    },
    {
        speciality: 'Extentions',
        image: Extention
    },
    {
        speciality: 'Scalp Health',
        image: Scalp
    },
    {
        speciality: 'Men\'s Grooming',
        image: MensGroom
    },
    {
        speciality: 'Wig & Hairpiece',
        image:  Styling
    },
]

export const doctors = [
    {
        _id: 'bar1',
        name: 'Ferry',
        image: bar1,
        speciality: 'Haircut',
        experience: '4 Years',
        about: 'Ferry, a skilled hair-cut specialist with 4 years of experience, delivering precision cuts and stylish transformations with expert craftsmanship',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar2',
        name: 'Rose',
        image: bar2,
        speciality: 'Extentions',
        experience: '3 Years',
        about: 'Rose, a talented Extention specialist with 4 years of experience, crafting precision cuts and stylish looks with expert finesse.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar3',
        name: 'Root',
        image: bar3,
        speciality: 'Men\'s Grooming',
        experience: '1 Years',
        about: 'Root, a talented Grooming specialist with 4 years of experience, crafting precision cuts and stylish looks with expert finesse.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar4',
        name: 'Kemedith',
        image: bar4,
        speciality: 'Scalp Health',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar5',
        name: 'Leviston',
        image: bar5,
        speciality: 'Wig & Hairpiece',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar6',
        name: 'Andrea',
        image: bar6,
        speciality: 'Treatment',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar7',
        name: 'Harry',
        image: bar7,
        speciality: 'Hair Colouring',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar8',
        name: 'Sony',
        image: bar8,
        speciality: 'Treatment',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar9',
        name: 'Jimmy',
        image: bar9,
        speciality: 'Haircut',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar10',
        name: 'Exsty',
        image: bar10,
        speciality: 'Scalp Health',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar11',
        name: 'Anisha',
        image: bar11,
        speciality: 'Men\'s Grooming',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar12',
        name: 'Broad',
        image: bar12,
        speciality: 'Extentions',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'bar13',
        name: 'Zara',
        image: bar13,
        speciality: 'Haircut',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]