"use client";
import React, { useEffect } from "react";

export default function ScrollTo() {
  useEffect(() => window.scrollTo(0, 0), []);
  return null;
}
