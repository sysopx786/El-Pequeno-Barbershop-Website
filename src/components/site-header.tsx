import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { BarberPole } from "@/components/barber-pole";
import { Button } from "@/components/ui/button";
import { GoogleG, GoogleStars } from "@/components/brand-marks";
import { SHOP, getShopStatus } from "@/lib/shop";
import { LANG_NAME, LANG_SHORT, loc, otherLangs, useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", key: "navAbout" },
  { href: "#barbers", key: "navBarbers" },
  { href: "#services", key: "navServices" },
  { href: "#blueprint", key: "navBlueprint" },
  { href: "#gallery", key: "navGallery" },
  { href: "#featured", key: "navFeatured" },
  { href: "#videos", key: "navCuts" },
] as const;
