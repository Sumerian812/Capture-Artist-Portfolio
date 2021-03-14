import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div onClick={() => setToggle(!toggle)} className="question" layout>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ""}
            <motion.div className="faq-line" layout></motion.div>
        </motion.div>
    );
}

export default Toggle;