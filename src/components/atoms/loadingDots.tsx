const LoadingDots = () => {
    return (
        <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full animate-jump" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-1 bg-gray-200 rounded-full animate-jump" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-jump" style={{ animationDelay: '0.4s' }}></div>
        </div>
    );
};

export default LoadingDots;