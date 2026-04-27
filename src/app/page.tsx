"use client";

import ReactLenis from "lenis/react";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

export default function BusinessCoachTemplatePage() {
    const navItems = [
        { name: "О нас", id: "about" },
        { name: "Услуги", id: "services" },
        { name: "Отзывы", id: "testimonials" },
        { name: "Контакты", id: "contact" },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Coach"
                    button={{ text: "Записаться на сессию", href: "#contact" }}
                />
                <HeroSplitDualMedia
                    background={{ variant: "radial-gradient" }}
                    tag="Бизнес-коучинг"
                    tagIcon={Sparkles}
                    title="Трансформируйте свой бизнес с помощью проверенных стратегий"
                    description="Я помогаю предпринимателям и руководителям раскрыть свой потенциал и создать процветающий бизнес посредством персонального коучинга."
                    mediaItems={[
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp", imageAlt: "Коуч-сессия" },
                        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp", imageAlt: "Рост бизнеса" },
                    ]}
                    rating={5}
                    ratingText="Высокая оценка довольных клиентов"
                    buttons={[
                        { text: "Записаться на сессию", href: "#" },
                        { text: "Узнать больше", href: "#" },
                    ]}
                    mediaAnimation="slide-up"
                />
                <FeatureCardTwentyFive
                    tag="Услуги"
                    tagIcon={Sparkles}
                    title="Как я могу помочь вашему бизнесу"
                    description="Комплексные программы коучинга, разработанные для ускорения вашего роста."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    features={[
                        {
                            title: "Бизнес-стратегия",                            description: "Разработка четких и эффективных стратегий, которые соответствуют вашим целям для устойчивого развития.",                            icon: Target,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", imageAlt: "Командная работа" },
                                { imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", imageAlt: "Стратегическое планирование" },
                            ],
                        },
                        {
                            title: "Развитие лидерства",                            description: "Формирование лидерских качеств, необходимых для вдохновения команд и достижения успеха.",                            icon: Users,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", imageAlt: "Профессиональная встреча" },
                                { imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop", imageAlt: "Уверенный лидер" },
                            ],
                        },
                        {
                            title: "Ускорение роста",                            description: "Выявление скрытых возможностей и внедрение систем для эффективного масштабирования.",                            icon: TrendingUp,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", imageAlt: "Аналитика бизнеса" },
                                { imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", imageAlt: "Метрики роста" },
                            ],
                        },
                        {
                            title: "Коучинг мышления",                            description: "Преодоление ограничивающих убеждений и формирование мышления успешного предпринимателя.",                            icon: Lightbulb,
                            mediaItems: [
                                { imageSrc: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop", imageAlt: "Осознанность и фокус" },
                                { imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop", imageAlt: "Персональный коучинг" },
                            ],
                        },
                    ]}
                />
                <TestimonialCardSixteen
                    tag="Отзывы"
                    tagIcon={Sparkles}
                    title="Что говорят мои клиенты"
                    description="Истории предпринимателей, которые смогли трансформировать свой бизнес."
                    textboxLayout="default"
                    animationType="slide-up"
                    useInvertedBackground={false}
                    testimonials={[
                        {
                            id: "1",                            name: "Сара Митчелл",                            role: "Основатель и CEO",                            company: "TechStart Inc",                            rating: 5,
                            imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Сара Митчелл"},
                        {
                            id: "2",                            name: "Майкл Чен",                            role: "Управляющий директор",                            company: "Growth Partners",                            rating: 5,
                            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Майкл Чен"},
                        {
                            id: "3",                            name: "Эмили Родригес",                            role: "Владелец бизнеса",                            company: "Creative Studios",                            rating: 5,
                            imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Эмили Родригес"},
                    ]}
                    kpiItems={[
                        { value: "200+", label: "Проведенных консультаций" },
                        { value: "95%", label: "Успешных кейсов" },
                        { value: "12+", label: "Лет опыта" },
                    ]}
                />
                <TeamCardTen
                    title="Познакомьтесь с экспертами, которые помогут вам пройти путь бизнес-трансформации"
                    tag="О нас"
                    membersAnimation="slide-up"
                    memberVariant="card"
                    useInvertedBackground={false}
                    members={[
                        {
                            id: "1",                            name: "Джон Андерсон",                            imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Джон Андерсон - Бизнес-коуч"},
                        {
                            id: "2",                            name: "Лиза Томпсон",                            imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",                            imageAlt: "Лиза Томпсон - Исполнительный коуч"},
                    ]}
                />
                <FaqSplitMedia
                    tag="Частые вопросы"
                    tagIcon={Sparkles}
                    title="Часто задаваемые вопросы"
                    description="Ответы на ключевые вопросы о моих коучинговых программах."
                    textboxLayout="default"
                    faqsAnimation="slide-up"
                    mediaAnimation="slide-up"
                    useInvertedBackground={false}
                    imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                    imageAlt="Консультация по коучингу"
                    mediaPosition="right"
                    faqs={[
                        {
                            id: "1",                            title: "С какими типами бизнеса вы работаете?",                            content: "Я работаю с предпринимателями, стартапами и действующими компаниями в различных отраслях. Мой подход адаптируется под ваши задачи, независимо от стадии развития бизнеса."},
                        {
                            id: "2",                            title: "Сколько длится программа коучинга?",                            content: "Обычно значимые результаты достигаются за 3-6 месяцев регулярных сессий. Длительность зависит от ваших целей и сложности задач. Мы обсудим детали на консультации."},
                        {
                            id: "3",                            title: "Чего ожидать от наших встреч?",                            content: "Каждая сессия — это сфокусированный и ориентированный на действия разговор. Мы решаем актуальные вызовы и составляем пошаговый план внедрения изменений."},
                        {
                            id: "4",                            title: "Проводите ли вы сессии онлайн?",                            content: "Да, я работаю как очно, так и в формате онлайн-встреч через Zoom. Эффективность онлайн-сессий идентична очным встречам."},
                    ]}
                />
                <ContactText
                    text="Готовы вывести свой бизнес на новый уровень? Давайте начнем ваш путь к успеху прямо сейчас."
                    background={{ variant: "plain" }}
                    useInvertedBackground={false}
                    buttons={[
                        { text: "Бесплатная консультация", href: "#" },
                        { text: "Подробнее", href: "#" },
                    ]}
                />
                <FooterLogoEmphasis
                    logoText="Coach"
                    columns={[
                        {
                            items: [
                                { label: "О нас", href: "#about" },
                                { label: "Услуги", href: "#services" },
                                { label: "Отзывы", href: "#testimonials" },
                            ],
                        },
                        {
                            items: [
                                { label: "FAQ", href: "#faq" },
                                { label: "Контакты", href: "#contact" },
                                { label: "Записаться", href: "#" },
                            ],
                        },
                        {
                            items: [
                                { label: "LinkedIn", href: "#" },
                                { label: "Twitter", href: "#" },
                                { label: "Instagram", href: "#" },
                            ],
                        },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}
