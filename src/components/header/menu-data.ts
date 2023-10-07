export interface MenuType {
    key: string
    href: string
    description?: string
    subMenu?: MenuType[]    
}

export const publicMenu: MenuType[]= [
        {
            key: 'Nosotros',
            href: '/',
            subMenu: [
                {
                    key: 'Manifiesto',
                    href: '/',
                    description: 'En un mundo saturado de información, nos centramos en lo verdaderamente importante para alcanzar nuestros objetivos. '
                },
                {
                    key: 'Equipo Tinta',
                    href: '/',
                    description: 'El equipo que lo hace posible'
                },
            ]
        },
        { 
            key: 'Servicios',
            href: '/',
            subMenu: [
                {
                    key: 'Redes Sociales',
                    href: '/',
                    description: 'Gestionamos y optimizamos las redes sociales de su marca de vinos, creando contenido atractivo y relevante para conectar con su audiencia, aumentar la visibilidad y fomentar la interacción.'
                },
                {
                    key: 'Creación de contenido de marca',
                    href: '/',
                    description: 'Desarrollamos contenido original y de calidad para su marca de vinos. Videos, fotografías y textos que cuentan una historia, con el fin de destacar su identidad y valores en el mercado y conectar con su audiencia.'
                },
                {
                    key: 'Posicionamiento Web y Publicidad Online',
                    href: '/',
                    description: 'Mejoramos la visibilidad de su marca de vinos en los motores de búsqueda y en las redes sociales mediante estrategias de optimización de contenido (SEO), campañas publicitarias de pago por clic (SEM) y publicidad en plataformas sociales. '
                },
                {
                    key: 'Asesoría Estratégica en Marketing del Vino',
                    href: '/',
                    description: 'Ofrecemos asesoramiento experto en marketing del vino y estrategias de comunicación, ayudándote a identificar oportunidades de crecimiento y a desarrollar planes de acción efectivos para alcanzar sus objetivos comerciales.'
                },
                {
                    key: 'Soluciones personalizadas en marketing & ventas',
                    href: '/',
                    description: 'Con una mirada analítica y experta, planteamos propuestas personalizadas que se ajustan a las necesidades específicas del departamento comercial de su negocio.'
                },
                {
                    key: 'Estrategia Tina',
                    href: '/',
                    description: 'Te damos el impulso que necesitas para comenzar a comunicar tu marca de vinos en redes sociales. Auditoría, estrategia y contenidos de marca para que puedas ser consistente en las plataformas adecuadas mientras tu negocio crece.'
                },
            ]
        },
        {
            key: 'Proyectos',
            href: '/',
        },
        {
            key: 'Blog',
            href: '/',
        },
        {
            key: 'Planner',
            href: '/',
        },
        {
            key: 'Desarrollo',
            href: '/',
            subMenu: [
                {
                    key: 'Academy',
                    href: '/',
                    description: 'Educación del marketing digital para bodegas'
                },
                {
                    key: 'Tinta Bot',
                    href: '/',
                    description: 'Ahorra tiempo y dinero mientras brindas un excelente servicio al cliente con un chatbot entrenado con AI para tu bodega.'
                },
            ]
        },
        ]
