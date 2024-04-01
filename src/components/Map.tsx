import React from "react";

const Map = () => {
  return (
    <div className="mt-[150px]">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.073069253112!2d69.2012376760903!3d41.285514171313025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1711990244311!5m2!1sru!2s"
            width="650"
            height="600"
            className="rounded-[10px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSclGR229T2fhdiMJmTWCB9CQejMauQQYXl1heR9gJmxqwYNig/viewform?embedded=true"
            width="650"
            height="600"
            frameBorder="0"
          >
            Загрузка…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
