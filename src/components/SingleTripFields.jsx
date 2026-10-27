import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import Field from './Field';
import { FIELD_DEFS } from '../constants/homeConstants';

const SingleTripFields = ({ oneWay }) => {
  const span = (wide) => (oneWay && wide ? "lg:col-span-3" : "lg:col-span-2");
  return (
    <motion.div
      key="single"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <Field field={FIELD_DEFS.from} className={span(true)} />
        <Field field={FIELD_DEFS.to} className={span(true)} />
        <Field field={FIELD_DEFS.depart} className={span(false)} />
        <AnimatePresence initial={false} mode="popLayout">
          {!oneWay && <Field key="return" field={FIELD_DEFS.return} className={span(false)} />}
        </AnimatePresence>
        <Field field={FIELD_DEFS.pax} className={span(false)} />
        <Field field={FIELD_DEFS.class} className={`${span(false)} ${oneWay ? "sm:col-span-2" : ""}`} />
      </motion.div>
    </motion.div>
  );
}

export default SingleTripFields
