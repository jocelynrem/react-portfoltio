//src/components/print.js

export default function printDesigns(props) {
    const { src, alt } = props

    return (
        <div className="printDesign smart-layers-pointers md:col-span-1">
            <img alt={alt} src={src} />
        </div>
    );
}