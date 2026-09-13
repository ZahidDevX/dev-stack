export const Container = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="container mx-auto px-2 lg:px-4">
            {children}
        </div>
    );
};
