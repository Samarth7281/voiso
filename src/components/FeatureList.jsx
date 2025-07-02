const FeatureList = ({ feature }) => {
  return (
    <div className="flex justify-between items-center w-full ">
      {/* Left side: tick + label */}
      <div className="flex items-center gap-2">
        <img
          src="https://voiso.com/wp-content/themes/voiso/static/images/check.svg"
          alt="tick"
          className="w-6 h-6"
        />
        <span>{feature}</span>
      </div>

      {/* Right side: info icon */}
      <img
        src="https://voiso.com/wp-content/themes/voiso/static/images/info.svg"
        alt="info"
        className="w-4 h-4"
      />
    </div>
  );
};
export default FeatureList;