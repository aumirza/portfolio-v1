export const FullSection = ({ className, children, title, ...restProps }) => {
    return (
        <section {...restProps} className={"h-screen flex flex-col justify-center items-center " + className}>

            {
                title ?
                    <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10 ">
                        {title}
                    </h1>
                    : ""
            }

            {children}
        </section>
    )
}
