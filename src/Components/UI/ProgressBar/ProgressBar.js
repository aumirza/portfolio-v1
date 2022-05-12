export const ProgressBar = ({ label, value, color, width }) => {

    return (

        <div className={(width ? 'w-' + width : 'w-40 sm:w-56')}>
            <div className="bg-gray-200 h-3 sm:h-5 rounded-full">
                <div className="flex h-3 sm:h-5 items-center justify-center text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full bg-blue-600"
                    style={{ width: value + '%' }} > {value}%</div>
            </div>
        </div>

    )
}
