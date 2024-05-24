import htmlImg from '../images/html 1.png'
import cssImg from '../images/css 1.png'
import mySqlImg from '../images/mysql 1.png'
import cLangImg from '../images/C 1.png'
import jsImg from '../images/jslogo (2).png'
import cppImg from '../images/C++ 1.png'
import javaImg from '../images/java 3.png'
import kotlinImg from '../images/KOTLIN 1.png'
import nodeJsImg from '../images/nodejs 1.png'
import pythonImg from '../images/python 1.png'
import reactImg from '../images/reactjs 3.png'
import rubyImg from '../images/RUBY 1.png'
import swiftImg from '../images/SWIFT 3.png'
import tailwindcssImg from '../images/tailwind 1.png'
import './Card.css'

function Card() {
    const objofLanguages = [{
        img: htmlImg,
        title: 'HTML',
        description: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages and applications, defining the structure and content of web documents.',
        link: 'redirectToHTMLPage()'

    },
    {
        img: cssImg,
        title: 'CSS',
        description: 'CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of HTML documents, enabling precise customization of elements such as colors, fonts, and spacing.',
        link: 'redirectToCSSPage()'
    },
    {
        img: mySqlImg,
        title: 'MY SQL',
        description: ' MySQL is a popular open-source relational database management system (RDBMS) known for its reliability, scalability, and performance, widely used for managing structured data in various applications.',
        link: 'redirectToMYSQLPage()'
    },
    {
        img: cLangImg,
        title: 'C LANGUAGE',
        description: 'C is a powerful and efficient procedural programming language, renowned for its versatility and portability, commonly used for system programming, embedded systems, and application development.',
        link: 'redirectToCPage()'
    },
    {
        img: jsImg,
        title: 'JAVASCRIPT',
        description: 'JavaScript is a versatile scripting language primarily used for web development, enabling dynamic and interactive content on websites, including animations, form validation, and client-side functionality.',
        link: 'redirectToJSPage()'
    },
    {
        img: cppImg,
        title: 'C++ LANGUAGE',
        description: 'C++ is an object-oriented programming language derived from C, known for its efficiency, flexibility, and extensive standard libraries, widely used in game development, system programming, and software engineering.',
        link: 'redirectToCPPPage()'
    },
    {
        img: javaImg,
        title: 'JAVA',
        description: 'Java is a high-level, className-based programming language known for its platform independence, robustness, and extensive ecosystem, widely used for developing enterprise-scale applications, mobile apps, and web servers.',
        link: 'redirectToJAVAPage()'
    },
    {
        img: kotlinImg,
        title: 'KOTLIN',
        description: 'Kotlin is a modern, statically-typed programming language interoperable with Java, known for its conciseness, safety features, and full-stack development capabilities, commonly used for Android app development and backend services.',
        link: 'redirectToKOTLINPage()'
    },
    {
        img: nodeJsImg,
        title: 'NODE JS',
        description: 'Node.js is a runtime environment built on Chrome`s V8 JavaScript engine, allowing developers to run JavaScript on the server- side, facilitating scalable and event - driven applications, including web servers, APIs, and real - time applications.',
        link: 'redirectToNODEJSPage()'
    },
    {
        img: pythonImg,
        title: 'PYTHON',
        description: 'Python is a versatile, high-level programming language known for its simplicity, readability, and vast ecosystem of libraries, commonly used for web development, data analysis, artificial intelligence, and automation.',
        link: 'redirectToPYTHONPage()'
    },
    {
        img: reactImg,
        title: 'REACT JS',
        description: 'React.js is a JavaScript library for building user interfaces, known for its component-based architecture, virtual DOM, and declarative approach, enabling efficient and interactive web applications with reusable UI components.',
        link: 'redirectToREACTJSPage()'
    },
    {
        img: rubyImg,
        title: 'RUBY',
        description: 'Ruby is a dynamic, object-oriented programming language known for its simplicity, productivity, and elegant syntax, commonly used for web development, prototyping, and automation.',
        link: 'redirectToRUBYPage()'
    },
    {
        img: swiftImg,
        title: 'SWIFT',
        description: 'Swift is a powerful and intuitive programming language developed by Apple, known for its safety features, speed, and modern syntax, used for building iOS, macOS, watchOS, and tvOS applications.',
        link: 'redirectToSWIFTPage()'
    },
    {
        img: tailwindcssImg,
        title: 'TAILWIND CSS',
        description: 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classNamees for styling web interfaces, enabling rapid development and customization of responsive and scalable UI components.',
        link: 'redirectToTAILWINDSCSPage()'
    }]
    return (
        <>
            <div className="container-fluid" id="blur">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" id="container">
                    {
                        objofLanguages?.map((v, index) => (
                            <div className="col mt-3" key={index}>
                                <div className="card">
                                    <img src={v.img} className="card-img-top" alt="..." />
                                    <div className="card-body mt-3">
                                        <h5 className="card-title text-center">{v.title}</h5>
                                        <p className="card-text text-center lh-base">{v.description}</p>
                                    </div>
                                    <button className="mt-3 card-button"><a href="#">Play</a></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Card