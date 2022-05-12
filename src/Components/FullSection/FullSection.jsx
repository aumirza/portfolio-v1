export const FullSection = ({ className, children, ...restProps }) => {
    return (
        <section {...restProps} className={"h-screen flex justify-center items-center " + className}>
            {children}
        </section>
    )
}
