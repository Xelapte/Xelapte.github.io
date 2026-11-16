const $ = Math.PI / 180, z = (s, e, t) => Math.min(t, Math.max(e, s)), L = (s, e) => [s[0] + e[0], s[1] + e[1], s[2] + e[2]], _ = (s, e) => [s[0] - e[0], s[1] - e[1], s[2] - e[2]], R = (s, e) => [s[0] * e, s[1] * e, s[2] * e], T = (s, e) => s[0] * e[0] + s[1] * e[1] + s[2] * e[2], ge = (s) => Math.hypot(s[0], s[1], s[2]), b = (s, e, t) => [s[0] + e[0] * t, s[1] + e[1] * t, s[2] + e[2] * t];
function Be(s, e) {
  return [s[1] * e[2] - s[2] * e[1], s[2] * e[0] - s[0] * e[2], s[0] * e[1] - s[1] * e[0]];
}
function H(s) {
  const e = ge(s) || 1;
  return [s[0] / e, s[1] / e, s[2] / e];
}
function ne(s) {
  const [e, t, n] = s.map((d) => d * $), i = Math.cos(e), r = Math.sin(e), a = Math.cos(t), o = Math.sin(t), l = Math.cos(n), c = Math.sin(n);
  return [
    a * l,
    -a * c,
    o,
    i * c + r * l * o,
    i * l - r * c * o,
    -r * a,
    r * c - i * l * o,
    r * l + i * c * o,
    i * a
  ];
}
function kt(s) {
  const e = Math.asin(z(s[2], -1, 1));
  let t, n;
  return Math.abs(s[2]) < 0.9999999 ? (t = Math.atan2(-s[5], s[8]), n = Math.atan2(-s[1], s[0])) : (t = Math.atan2(s[7], s[4]), n = 0), [t / $, e / $, n / $];
}
function Tt(s, e) {
  const t = new Array(9).fill(0);
  for (let n = 0; n < 3; n++)
    for (let i = 0; i < 3; i++)
      t[n * 3 + i] = s[n * 3] * e[i] + s[n * 3 + 1] * e[3 + i] + s[n * 3 + 2] * e[6 + i];
  return t;
}
function St(s, e) {
  const [t, n, i] = H(s), r = Math.cos(e), a = Math.sin(e), o = 1 - r;
  return [
    o * t * t + r,
    o * t * n - a * i,
    o * t * i + a * n,
    o * t * n + a * i,
    o * n * n + r,
    o * n * i - a * t,
    o * t * i - a * n,
    o * n * i + a * t,
    o * i * i + r
  ];
}
function ie(s, e) {
  return [
    s[0] * e[0] + s[1] * e[1] + s[2] * e[2],
    s[3] * e[0] + s[4] * e[1] + s[5] * e[2],
    s[6] * e[0] + s[7] * e[1] + s[8] * e[2]
  ];
}
function Et(s, e, t) {
  const n = ne(e);
  return [
    n[0] * t[0],
    n[1] * t[1],
    n[2] * t[2],
    s[0],
    n[3] * t[0],
    n[4] * t[1],
    n[5] * t[2],
    s[1],
    n[6] * t[0],
    n[7] * t[1],
    n[8] * t[2],
    s[2]
  ];
}
function Ct(s) {
  const [e, t, n, i, r, a, o, l, c, d, u, p] = s, g = a * u - o * d, m = -(r * u - o * c), w = r * d - a * c;
  let C = e * g + t * m + n * w;
  Math.abs(C) < 1e-12 && (C = C < 0 ? -1e-12 : 1e-12);
  const f = 1 / C, S = g * f, F = -(t * u - n * d) * f, W = (t * o - n * a) * f, ye = m * f, le = (e * u - n * c) * f, ce = -(e * o - n * r) * f, we = w * f, he = -(e * d - t * c) * f, Me = (e * a - t * r) * f;
  return [
    S,
    F,
    W,
    -(S * i + F * l + W * p),
    ye,
    le,
    ce,
    -(ye * i + le * l + ce * p),
    we,
    he,
    Me,
    -(we * i + he * l + Me * p)
  ];
}
function Ke(s, e) {
  return [
    s[0] * e[0] + s[1] * e[1] + s[2] * e[2] + s[3],
    s[4] * e[0] + s[5] * e[1] + s[6] * e[2] + s[7],
    s[8] * e[0] + s[9] * e[1] + s[10] * e[2] + s[11]
  ];
}
function Pt(s, e) {
  return [
    s[0] * e[0] + s[1] * e[1] + s[2] * e[2],
    s[4] * e[0] + s[5] * e[1] + s[6] * e[2],
    s[8] * e[0] + s[9] * e[1] + s[10] * e[2]
  ];
}
function It(s, e) {
  return H([
    s[0] * e[0] + s[4] * e[1] + s[8] * e[2],
    s[1] * e[0] + s[5] * e[1] + s[9] * e[2],
    s[2] * e[0] + s[6] * e[1] + s[10] * e[2]
  ]);
}
function At(s) {
  return [Math.hypot(s[0], s[4], s[8]), Math.hypot(s[1], s[5], s[9]), Math.hypot(s[2], s[6], s[10])];
}
function X(s) {
  const e = /^#?([0-9a-f]{6})$/i.exec(s.trim())?.[1] ?? "ffffff";
  return [0, 2, 4].map((t) => zt(parseInt(e.slice(t, t + 2), 16) / 255));
}
function Lt(s) {
  return "#" + s.map((e) => Math.round(z(Rt(z(e, 0, 1)), 0, 1) * 255).toString(16).padStart(2, "0")).join("");
}
function zt(s) {
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}
function Rt(s) {
  return s <= 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 1 / 2.4) - 0.055;
}
function Pe(s, e) {
  return e < 1 ? s / e : s;
}
function B(s) {
  const e = s.yaw * $, t = s.pitch * $, n = Math.cos(t), i = [s.distance * n * Math.sin(e), s.distance * Math.sin(t), s.distance * n * Math.cos(e)], r = L(s.target, i), a = H(R(i, -1));
  let o = Be(a, [0, 1, 0]);
  o = Math.hypot(...o) < 1e-6 ? [1, 0, 0] : H(o);
  const l = Be(o, a);
  return {
    position: r,
    right: o,
    up: l,
    forward: a,
    tanHalfFov: Math.tan(s.fov * $ / 2),
    focusDistance: s.focusDistance > 0 ? s.focusDistance : s.distance
  };
}
function Ft(s, e, t, n) {
  const i = B(s), r = Pe(i.tanHalfFov, n), a = H(L(L(i.forward, R(i.right, e * r * n)), R(i.up, t * r)));
  return { origin: i.position, direction: a };
}
function Nt(s, e, t) {
  const n = B(s), i = _(e, n.position), r = T(i, n.forward), a = Math.abs(r) < 1e-6 ? 1e-6 : r, o = Pe(n.tanHalfFov, t);
  return {
    x: T(i, n.right) / (a * o * t),
    y: T(i, n.up) / (a * o),
    depth: r
  };
}
function Q(s, e, t) {
  s.yaw = (s.yaw + e + 540) % 360 - 180, s.pitch = z(s.pitch + t, -89, 89);
}
function ke(s, e) {
  s.distance = z(s.distance * e, 0.1, 1e3);
}
function _t(s, e, t) {
  const n = B(s), i = 2 * n.tanHalfFov * s.distance;
  s.target = b(b(s.target, n.right, -e * i), n.up, t * i);
}
function et(s, e, t) {
  s.target = [...e];
  const n = t / Math.sin(Math.min(s.fov, 90) * $ * 0.5);
  s.distance = z(n * 1.15, 0.2, 1e3);
}
class dt {
  listeners = /* @__PURE__ */ new Map();
  on(e, t) {
    let n = this.listeners.get(e);
    return n || this.listeners.set(e, n = /* @__PURE__ */ new Set()), n.add(t), () => this.off(e, t);
  }
  off(e, t) {
    this.listeners.get(e)?.delete(t);
  }
  emit(e, t) {
    this.listeners.get(e)?.forEach((n) => n(t));
  }
}
const jt = Math.sqrt(0.75);
function Ie(s) {
  const e = Et(s.position, s.rotation, s.scale), t = At(e);
  return {
    matrix: e,
    inverse: Ct(e),
    center: [...s.position],
    boundRadius: jt * Math.max(t[0], t[1], t[2]) * 1.0001
  };
}
function Ae(s) {
  const e = ne(s.rotation), t = ie(e, [1, 0, 0]), n = ie(e, [0, 1, 0]), i = ie(e, [0, 0, 1]);
  return {
    u: R(t, s.size[0] / 2),
    v: R(i, s.size[1] / 2),
    normal: R(n, -1)
  };
}
function Re(s, e, t) {
  if (Math.abs(s) < 1e-12) {
    if (Math.abs(e) < 1e-12) return null;
    const o = -t / (2 * e);
    return [o, o];
  }
  const n = e * e - s * t;
  if (n < 0) return null;
  const i = Math.sqrt(n), r = (-e - i) / s, a = (-e + i) / s;
  return r < a ? [r, a] : [a, r];
}
function V(s, e, t, n) {
  return e > n && (!s || e < s.t) ? { t: e, normal: t } : s;
}
function Dt(s, e, t, n = 1e-6) {
  let i = null;
  switch (s) {
    case "sphere": {
      const r = Re(T(t, t), T(e, t), T(e, e) - 0.25);
      if (!r) return null;
      for (const a of r) i = V(i, a, H(b(e, t, a)), n);
      return i;
    }
    case "box": {
      let r = -1 / 0, a = 1 / 0;
      for (let o = 0; o < 3; o++) {
        if (Math.abs(t[o]) < 1e-12) {
          if (e[o] < -0.5 || e[o] > 0.5) return null;
          continue;
        }
        let l = (-0.5 - e[o]) / t[o], c = (0.5 - e[o]) / t[o];
        l > c && ([l, c] = [c, l]), r = Math.max(r, l), a = Math.min(a, c);
      }
      if (r > a) return null;
      for (const o of [r, a]) {
        const l = b(e, t, o), c = l.map(Math.abs), d = c[0] > c[1] && c[0] > c[2] ? 0 : c[1] > c[2] ? 1 : 2, u = [0, 0, 0];
        u[d] = Math.sign(l[d]) || 1, i = V(i, o, u, n);
      }
      return i;
    }
    case "cylinder": {
      const r = Re(t[0] * t[0] + t[2] * t[2], e[0] * t[0] + e[2] * t[2], e[0] * e[0] + e[2] * e[2] - 0.25);
      if (r)
        for (const a of r) {
          const o = b(e, t, a);
          Math.abs(o[1]) <= 0.5 && (i = V(i, a, H([o[0], 0, o[2]]), n));
        }
      if (Math.abs(t[1]) > 1e-12)
        for (const a of [-0.5, 0.5]) {
          const o = (a - e[1]) / t[1], l = b(e, t, o);
          l[0] * l[0] + l[2] * l[2] <= 0.25 && (i = V(i, o, [0, Math.sign(a), 0], n));
        }
      return i;
    }
    case "cone": {
      const r = 0.5 - e[1], a = Re(
        t[0] * t[0] + t[2] * t[2] - t[1] * t[1] / 4,
        e[0] * t[0] + e[2] * t[2] + r * t[1] / 4,
        e[0] * e[0] + e[2] * e[2] - r * r / 4
      );
      if (a)
        for (const o of a) {
          const l = b(e, t, o);
          l[1] >= -0.5 && l[1] <= 0.5 && (i = V(i, o, H([2 * l[0], (0.5 - l[1]) / 2, 2 * l[2]]), n));
        }
      if (Math.abs(t[1]) > 1e-12) {
        const o = (-0.5 - e[1]) / t[1], l = b(e, t, o);
        l[0] * l[0] + l[2] * l[2] <= 0.25 && (i = V(i, o, [0, -1, 0], n));
      }
      return i;
    }
    case "plane":
    case "disk": {
      if (Math.abs(t[1]) < 1e-12) return null;
      const r = -e[1] / t[1], a = b(e, t, r);
      return (s === "plane" ? Math.abs(a[0]) <= 0.5 && Math.abs(a[2]) <= 0.5 : a[0] * a[0] + a[2] * a[2] <= 0.25) ? V(null, r, [0, 1, 0], n) : null;
    }
  }
}
function tt(s, e, t) {
  const n = _(s.origin, e), i = T(n, s.direction), r = T(n, n) - t * t, a = i * i - r;
  if (a < 0) return null;
  const o = Math.sqrt(a), l = -i - o > 1e-6 ? -i - o : -i + o;
  return l > 1e-6 ? l : null;
}
function se(s, e, t = {}) {
  let n = null;
  const i = t.ignore;
  for (const r of s.objects) {
    if (!r.visible || i?.has(r.id)) continue;
    const a = Ie(r);
    if (tt(e, a.center, a.boundRadius) === null && ge(_(e.origin, a.center)) > a.boundRadius) continue;
    const l = Ke(a.inverse, e.origin), c = Pt(a.inverse, e.direction), d = Dt(r.shape, l, c);
    d && (!n || d.t < n.t) && (n = {
      kind: "object",
      id: r.id,
      t: d.t,
      point: b(e.origin, e.direction, d.t),
      normal: It(a.inverse, d.normal)
    });
  }
  if (t.lights !== !1) {
    const r = t.handleRadius ?? 0.08;
    for (const a of s.lights) {
      if (i?.has(a.id)) continue;
      let o = null, l = [0, 1, 0];
      if (a.type === "area") {
        const { u: c, v: d, normal: u } = Ae(a), p = T(e.direction, u);
        if (Math.abs(p) > 1e-9) {
          const g = T(_(a.position, e.origin), u) / p, m = b(e.origin, e.direction, g), w = _(m, a.position);
          g > 1e-6 && Math.abs(T(w, c) / T(c, c)) <= 1 && Math.abs(T(w, d) / T(d, d)) <= 1 && (o = g, l = u);
        }
      } else {
        const c = a.type === "sphere" ? Math.max(a.radius, r * 0.5) : r;
        o = tt(e, a.position, c), o !== null && (l = H(_(b(e.origin, e.direction, o), a.position)));
      }
      o !== null && (!n || o < n.t) && (n = { kind: "light", id: a.id, t: o, point: b(e.origin, e.direction, o), normal: l });
    }
  }
  return n;
}
function pt(s) {
  return s.shape === "plane" || s.shape === "disk" ? 0 : 0.5;
}
function ut(s) {
  const e = Ie(s), t = [1 / 0, 1 / 0, 1 / 0], n = [-1 / 0, -1 / 0, -1 / 0], i = pt(s);
  for (let r = 0; r < 8; r++) {
    const a = [r & 1 ? 0.5 : -0.5, r & 2 ? i : -i, r & 4 ? 0.5 : -0.5], o = Ke(e.matrix, a);
    for (let l = 0; l < 3; l++)
      t[l] = Math.min(t[l], o[l]), n[l] = Math.max(n[l], o[l]);
  }
  return { min: t, max: n };
}
function Ht(s) {
  let e = null;
  for (const t of s.objects) {
    if (!t.visible) continue;
    const n = ut(t);
    e ? e = {
      min: e.min.map((i, r) => Math.min(i, n.min[r])),
      max: e.max.map((i, r) => Math.max(i, n.max[r]))
    } : e = n;
  }
  return e;
}
function Ot(s) {
  const { matrix: e } = Ie(s), t = [], n = pt(s);
  for (let i = 0; i < 8; i++)
    t.push(Ke(e, [i & 1 ? 0.5 : -0.5, i & 2 ? n : -n, i & 4 ? 0.5 : -0.5]));
  return t;
}
function Ut(s) {
  const { u: e, v: t } = Ae(s), n = s.position;
  return [
    b(b(n, e, -1), t, -1),
    b(b(n, e, 1), t, -1),
    b(b(n, e, 1), t, 1),
    b(b(n, e, -1), t, 1)
  ];
}
const be = ["sphere", "box", "cylinder", "cone", "plane", "disk"], $e = ["area", "sphere", "point", "sun"], ft = ["aces", "reinhard", "linear"], Bt = ["none", "checker"];
let Fe = 0;
function D(s) {
  Fe = (Fe + 1) % 1296;
  const e = Math.floor(Math.random() * 36 ** 4).toString(36).padStart(4, "0");
  return `${s}-${e}${Fe.toString(36).padStart(2, "0")}`;
}
const mt = {
  name: "Material",
  baseColor: "#cccccc",
  metallic: 0,
  roughness: 0.5,
  specular: 0.5,
  transmission: 0,
  ior: 1.5,
  clearcoat: 0,
  clearcoatRoughness: 0.05,
  emission: "#ffffff",
  emissionStrength: 0,
  pattern: "none",
  patternColor: "#222222",
  patternScale: 4
}, Y = {
  target: [0, 0.9, -0.3],
  yaw: 0,
  pitch: 3.5,
  distance: 4.4,
  fov: 38,
  aperture: 0,
  focusDistance: 0
}, ee = {
  type: "color",
  color: "#000000",
  zenith: "#4a7bc8",
  horizon: "#c9d6e6",
  ground: "#3a3632",
  intensity: 0.45
}, de = {
  maxBounces: 8,
  maxSamples: 4096,
  exposure: 0,
  toneMapping: "aces",
  clamp: 8
}, $t = {
  sphere: "Sphere",
  box: "Box",
  cylinder: "Cylinder",
  cone: "Cone",
  plane: "Plane",
  disk: "Disk"
}, Gt = {
  area: "Area light",
  sphere: "Sphere light",
  point: "Point light",
  sun: "Sun"
};
function y(s = {}) {
  return { ...mt, ...s, id: s.id ?? D("mat") };
}
function v(s, e = {}) {
  const t = s === "plane" || s === "disk";
  return {
    id: e.id ?? D("obj"),
    name: e.name ?? $t[s],
    shape: s,
    position: e.position ?? [0, t ? 0 : 0.5, 0],
    rotation: e.rotation ?? [0, 0, 0],
    scale: e.scale ?? (t ? [2, 1, 2] : [1, 1, 1]),
    materialId: e.materialId ?? "",
    visible: e.visible ?? !0
  };
}
function O(s, e = {}) {
  const t = {
    area: { intensity: 12, position: [0, 1.95, 0] },
    sphere: { intensity: 20, position: [0, 1.4, 0], radius: 0.1 },
    point: { intensity: 2, position: [0, 1.4, 0] },
    sun: { intensity: 2.4, position: [0, 2.5, 0], rotation: [-35, 0, 25], color: "#fff4e0" }
  };
  return {
    id: D("light"),
    name: Gt[s],
    enabled: !0,
    visible: !0,
    position: [0, 1.5, 0],
    rotation: [0, 0, 0],
    color: "#ffffff",
    intensity: 10,
    size: [0.6, 0.4],
    radius: 0.1,
    angle: 0.53,
    ...t[s],
    ...e,
    type: s
  };
}
function Pn(s = {}) {
  return A(s);
}
function gt(s) {
  return structuredClone(s);
}
const K = (s) => typeof s == "object" && s !== null && !Array.isArray(s), x = (s, e, t = -1 / 0, n = 1 / 0) => typeof s == "number" && Number.isFinite(s) ? z(s, t, n) : e, Z = (s, e) => typeof s == "string" && s.length > 0 ? s : e, Ge = (s, e) => typeof s == "boolean" ? s : e, ve = (s, e, t) => e.includes(s) ? s : t;
function re(s, e) {
  return !Array.isArray(s) || s.length !== 3 ? [...e] : s.map((t, n) => x(t, e[n]));
}
function q(s, e) {
  if (typeof s == "string") {
    const t = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(s.trim());
    if (t) return `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`.toLowerCase();
    const n = /^#?([0-9a-f]{6})$/i.exec(s.trim());
    if (n) return `#${n[1].toLowerCase()}`;
  }
  return Array.isArray(s) && s.length === 3 && s.every((t) => typeof t == "number") ? Lt(s) : e;
}
function Je(s) {
  const e = K(s) ? s : {}, t = mt;
  return {
    id: Z(e.id, D("mat")),
    name: Z(e.name, t.name),
    baseColor: q(e.baseColor, t.baseColor),
    metallic: x(e.metallic, t.metallic, 0, 1),
    roughness: x(e.roughness, t.roughness, 0, 1),
    specular: x(e.specular, t.specular, 0, 1),
    transmission: x(e.transmission, t.transmission, 0, 1),
    ior: x(e.ior, t.ior, 1, 3),
    clearcoat: x(e.clearcoat, t.clearcoat, 0, 1),
    clearcoatRoughness: x(e.clearcoatRoughness, t.clearcoatRoughness, 0, 1),
    emission: q(e.emission, t.emission),
    emissionStrength: x(e.emissionStrength, t.emissionStrength, 0, 1e3),
    pattern: ve(e.pattern, Bt, t.pattern),
    patternColor: q(e.patternColor, t.patternColor),
    patternScale: x(e.patternScale, t.patternScale, 0.01, 1e3)
  };
}
function Xt(s) {
  const e = K(s) ? s : {}, t = v(ve(e.shape, be, "sphere"), { id: Z(e.id, D("obj")) });
  return {
    ...t,
    name: Z(e.name, t.name),
    position: re(e.position, t.position),
    rotation: re(e.rotation, t.rotation),
    scale: re(e.scale, t.scale),
    materialId: typeof e.materialId == "string" ? e.materialId : "",
    visible: Ge(e.visible, !0)
  };
}
function qt(s) {
  const e = K(s) ? s : {}, t = O(ve(e.type, $e, "area"), { id: Z(e.id, D("light")) }), n = Array.isArray(e.size) && e.size.length === 2 ? e.size : t.size;
  return {
    ...t,
    name: Z(e.name, t.name),
    enabled: Ge(e.enabled, !0),
    visible: Ge(e.visible, !0),
    position: re(e.position, t.position),
    rotation: re(e.rotation, t.rotation),
    color: q(e.color, t.color),
    intensity: x(e.intensity, t.intensity, 0, 1e6),
    size: [x(n[0], t.size[0], 1e-3), x(n[1], t.size[1], 1e-3)],
    radius: x(e.radius, t.radius, 1e-3),
    angle: x(e.angle, t.angle, 0, 90)
  };
}
function A(s) {
  const e = K(s) ? s : {}, t = K(e.camera) ? e.camera : {}, n = K(e.environment) ? e.environment : {}, i = K(e.render) ? e.render : {}, r = (Array.isArray(e.materials) ? e.materials : []).map(Je);
  r.length === 0 && r.push(y({ id: "mat-default", name: "Default" }));
  const a = new Set(r.map((l) => l.id)), o = (Array.isArray(e.objects) ? e.objects : []).map(Xt);
  for (const l of o) a.has(l.materialId) || (l.materialId = r[0].id);
  return {
    version: 2,
    name: Z(e.name, "Untitled"),
    camera: {
      target: re(t.target, Y.target),
      yaw: x(t.yaw, Y.yaw),
      pitch: x(t.pitch, Y.pitch, -89, 89),
      distance: x(t.distance, Y.distance, 0.05, 1e4),
      fov: x(t.fov, Y.fov, 5, 150),
      aperture: x(t.aperture, Y.aperture, 0, 10),
      focusDistance: x(t.focusDistance, Y.focusDistance, 0, 1e4)
    },
    environment: {
      type: ve(n.type, ["color", "sky"], ee.type),
      color: q(n.color, ee.color),
      zenith: q(n.zenith, ee.zenith),
      horizon: q(n.horizon, ee.horizon),
      ground: q(n.ground, ee.ground),
      intensity: x(n.intensity, ee.intensity, 0, 1e4)
    },
    render: {
      maxBounces: Math.round(x(i.maxBounces, de.maxBounces, 1, 32)),
      maxSamples: Math.round(x(i.maxSamples, de.maxSamples, 0, 1e6)),
      exposure: x(i.exposure, de.exposure, -10, 10),
      toneMapping: ve(i.toneMapping, ft, de.toneMapping),
      clamp: x(i.clamp, de.clamp, 0, 1e4)
    },
    materials: r,
    objects: o,
    lights: (Array.isArray(e.lights) ? e.lights : []).map(qt)
  };
}
function j(s, e) {
  if (!e) return null;
  const t = s.objects.find((i) => i.id === e);
  if (t) return { kind: "object", item: t };
  const n = s.lights.find((i) => i.id === e);
  return n ? { kind: "light", item: n } : null;
}
function Wt(s, e) {
  return s.materials.find((t) => t.id === e) ?? s.materials[0];
}
const Ee = [
  { id: "plastic", label: "Plastic", material: { baseColor: "#d8d8d8", roughness: 0.35 } },
  { id: "matte", label: "Matte", material: { baseColor: "#bdbdbd", roughness: 1, specular: 0.3 } },
  { id: "rubber", label: "Rubber", material: { baseColor: "#1c1c1c", roughness: 0.7 } },
  { id: "ceramic", label: "Ceramic", material: { baseColor: "#f2efe8", roughness: 0.6, clearcoat: 1, clearcoatRoughness: 0.03 } },
  { id: "car-paint", label: "Car paint", material: { baseColor: "#9c1018", roughness: 0.45, clearcoat: 1, clearcoatRoughness: 0.02 } },
  { id: "chrome", label: "Chrome", material: { baseColor: "#f4f4f4", metallic: 1, roughness: 0.03 } },
  { id: "brushed-steel", label: "Brushed steel", material: { baseColor: "#b9bcbf", metallic: 1, roughness: 0.32 } },
  { id: "gold", label: "Gold", material: { baseColor: "#ffd27a", metallic: 1, roughness: 0.15 } },
  { id: "copper", label: "Copper", material: { baseColor: "#f4a27c", metallic: 1, roughness: 0.25 } },
  { id: "glass", label: "Glass", material: { baseColor: "#ffffff", transmission: 1, roughness: 0, ior: 1.5 } },
  { id: "frosted-glass", label: "Frosted glass", material: { baseColor: "#f4f8ff", transmission: 1, roughness: 0.3, ior: 1.5 } },
  { id: "jade", label: "Jade", material: { baseColor: "#7fd6a4", transmission: 0.85, roughness: 0.18, ior: 1.6 } },
  { id: "diamond", label: "Diamond", material: { baseColor: "#ffffff", transmission: 1, roughness: 0, ior: 2.42 } },
  { id: "emissive", label: "Emissive", material: { baseColor: "#111111", emission: "#ff9a4d", emissionStrength: 2 } },
  { id: "checker", label: "Checker", material: { baseColor: "#e8e8e8", roughness: 0.6, pattern: "checker", patternColor: "#2a2a2a", patternScale: 4 } }
];
function Ne(s, e = {}) {
  const t = Ee.find((n) => n.id === s) ?? Ee[0];
  return y({ name: t.label, ...t.material, ...e });
}
const Vt = [-1.6, 0, -1.2], Yt = [1.6, 2, 1.4];
function Ze(s) {
  const [e, t, n] = Vt, [i, r, a] = Yt, o = i - e, l = r - t, c = a - n, d = (e + i) / 2, u = (t + r) / 2, p = (n + a) / 2;
  return [
    v("plane", { name: "Floor", position: [d, t, p], scale: [o, 1, c], materialId: s.floor }),
    v("plane", { name: "Ceiling", position: [d, r, p], rotation: [180, 0, 0], scale: [o, 1, c], materialId: s.ceiling }),
    v("plane", { name: "Back wall", position: [d, u, n], rotation: [90, 0, 0], scale: [o, 1, l], materialId: s.back }),
    v("plane", { name: "Left wall", position: [e, u, p], rotation: [0, 0, -90], scale: [l, 1, c], materialId: s.left }),
    v("plane", { name: "Right wall", position: [i, u, p], rotation: [0, 0, 90], scale: [l, 1, c], materialId: s.right })
  ];
}
const J = (s) => {
  const e = Math.round(Math.pow(s, 0.45454545454545453) * 255).toString(16).padStart(2, "0");
  return `#${e}${e}${e}`;
};
function oe(s) {
  return A(s);
}
function Kt() {
  const s = y({ name: "Wall", baseColor: J(0.72), roughness: 0.9 }), e = y({ name: "Floor", baseColor: J(0.7), roughness: 0.7 }), t = y({ name: "Mirror", baseColor: "#f4f4f4", metallic: 1, roughness: 0.02 }), n = y({ name: "Glass", baseColor: "#ffffff", transmission: 1, roughness: 0, ior: 1.5 }), i = y({ name: "Clay", baseColor: J(0.82), roughness: 0.8 }), r = y({ name: "Ink", baseColor: J(0.06), roughness: 0.4 });
  return oe({
    name: "Studio",
    materials: [s, e, t, n, i, r],
    objects: [
      ...Ze({ floor: e.id, ceiling: s.id, back: s.id, left: s.id, right: s.id }),
      v("sphere", { name: "Mirror ball", position: [-0.78, 0.46, -0.5], scale: [0.92, 0.92, 0.92], materialId: t.id }),
      v("sphere", { name: "Glass ball", position: [0.62, 0.4, 0.15], scale: [0.8, 0.8, 0.8], materialId: n.id }),
      v("sphere", { name: "Clay ball", position: [0.02, 0.27, -0.85], scale: [0.54, 0.54, 0.54], materialId: i.id }),
      v("box", { name: "Pillar", position: [1.175, 0.55, -0.825], scale: [0.45, 1.1, 0.45], materialId: r.id })
    ],
    lights: [O("area", { name: "Ceiling light", position: [-0.55, 1.999, -0.3], size: [0.64, 0.44], color: "#fff4e6", intensity: 14 })]
  });
}
function Jt() {
  const s = y({ name: "White", baseColor: J(0.725), roughness: 1 }), e = y({ name: "Red", baseColor: "#a5170f", roughness: 1 }), t = y({ name: "Green", baseColor: "#2a8f2c", roughness: 1 }), n = y({ name: "Glass", baseColor: "#ffffff", transmission: 1, roughness: 0, ior: 1.5 });
  return oe({
    name: "Cornell box",
    materials: [s, e, t, n],
    objects: [
      ...Ze({ floor: s.id, ceiling: s.id, back: s.id, left: e.id, right: t.id }),
      v("box", { name: "Tall box", position: [-0.62, 0.625, -0.55], rotation: [0, 18, 0], scale: [0.62, 1.25, 0.62], materialId: s.id }),
      v("box", { name: "Short box", position: [0.5, 0.3, -0.5], rotation: [0, -17, 0], scale: [0.62, 0.6, 0.62], materialId: s.id }),
      v("sphere", { name: "Glass ball", position: [0.55, 0.95, -0.5], scale: [0.7, 0.7, 0.7], materialId: n.id })
    ],
    lights: [O("area", { name: "Ceiling light", position: [0, 1.999, -0.2], size: [0.6, 0.5], color: "#ffd7a0", intensity: 17 })]
  });
}
function Zt() {
  const s = y({ name: "Wall", baseColor: J(0.6), roughness: 0.9 }), e = y({ name: "Floor", baseColor: J(0.45), roughness: 0.8 }), n = [0, 0.15, 0.3, 0.5, 0.8].map((i) => y({ name: `Brass ${i}`, baseColor: "#f2c98a", metallic: 1, roughness: i }));
  return oe({
    name: "Roughness ramp",
    materials: [s, e, ...n],
    objects: [
      ...Ze({ floor: e.id, ceiling: s.id, back: s.id, left: s.id, right: s.id }),
      ...n.map(
        (i, r) => v("sphere", { name: `Sphere ${r + 1}`, position: [-1.2 + r * 0.6, 0.26, -0.4], scale: [0.52, 0.52, 0.52], materialId: i.id })
      )
    ],
    lights: [O("area", { name: "Strip light", position: [0, 1.999, 0], size: [1, 0.36], intensity: 12 })]
  });
}
function Qt() {
  const s = y({ name: "Ground", baseColor: "#d9d9d9", roughness: 0.8, pattern: "checker", patternColor: "#a3a3a3", patternScale: 1 }), t = [
    { name: "Red plastic", baseColor: "#b3201a", roughness: 0.3 },
    { name: "Car paint", baseColor: "#1d3f9c", roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.02 },
    { name: "Gold", baseColor: "#ffd27a", metallic: 1, roughness: 0.18 },
    { name: "Copper", baseColor: "#f4a27c", metallic: 1, roughness: 0.4 },
    { name: "Glass", baseColor: "#ffffff", transmission: 1, roughness: 0 },
    { name: "Frosted", baseColor: "#e9f2ff", transmission: 1, roughness: 0.25 },
    { name: "Jade", baseColor: "#6fd39b", transmission: 0.85, roughness: 0.15, ior: 1.6 },
    { name: "Glow", baseColor: "#111111", emission: "#ff9a4d", emissionStrength: 2.5 }
  ].map((n) => y(n));
  return oe({
    name: "Material showcase",
    camera: { target: [0, 0.35, 0], yaw: 0, pitch: 18, distance: 4.6, fov: 34 },
    environment: { type: "sky", zenith: "#3c64a8", horizon: "#c9d2dc", ground: "#4a4440", intensity: 0.45 },
    materials: [s, ...t],
    objects: [
      v("plane", { name: "Ground", position: [0, 0, 0], scale: [12, 1, 12], materialId: s.id }),
      ...t.map(
        (n, i) => v("sphere", {
          name: n.name,
          position: [-1.5 + i % 4 * 1, 0.35, i < 4 ? -0.55 : 0.55],
          scale: [0.7, 0.7, 0.7],
          materialId: n.id
        })
      )
    ],
    lights: [
      O("sun", { name: "Sun", position: [1.8, 2.2, 1], rotation: [-40, 0, 30], intensity: 2, angle: 2 }),
      O("area", { name: "Softbox", position: [-2, 2.4, 1.5], rotation: [-40, 0, -35], size: [1.6, 1.2], intensity: 2 })
    ]
  });
}
function en() {
  const s = y({ name: "Ground", baseColor: "#bfb8ad", roughness: 0.9 }), e = y({ name: "Coral", baseColor: "#e5684e", roughness: 0.45 }), t = y({ name: "Teal", baseColor: "#2b8c86", roughness: 0.3, clearcoat: 0.6 }), n = y({ name: "Steel", baseColor: "#c4c7cb", metallic: 1, roughness: 0.25 }), i = y({ name: "Glass", baseColor: "#ffffff", transmission: 1, roughness: 0 }), r = y({ name: "Sand", baseColor: "#e6c98f", roughness: 0.8 });
  return oe({
    name: "Primitives",
    camera: { target: [0, 0.45, 0], yaw: 25, pitch: 22, distance: 4.4, fov: 36 },
    environment: { type: "sky", zenith: "#5582c4", horizon: "#d5dae0", ground: "#55504a", intensity: 0.45 },
    materials: [s, e, t, n, i, r],
    objects: [
      v("disk", { name: "Ground", position: [0, 0, 0], scale: [9, 1, 9], materialId: s.id }),
      v("box", { name: "Box", position: [-1.1, 0.4, -0.3], rotation: [0, 30, 0], scale: [0.8, 0.8, 0.8], materialId: e.id }),
      v("cylinder", { name: "Cylinder", position: [0, 0.5, -0.8], scale: [0.7, 1, 0.7], materialId: t.id }),
      v("cone", { name: "Cone", position: [1.1, 0.5, -0.3], scale: [0.8, 1, 0.8], materialId: r.id }),
      v("sphere", { name: "Sphere", position: [-0.45, 0.35, 0.65], scale: [0.7, 0.7, 0.7], materialId: n.id }),
      v("sphere", { name: "Lens", position: [0.6, 0.3, 0.7], scale: [0.6, 0.6, 0.6], materialId: i.id })
    ],
    lights: [O("sun", { name: "Sun", position: [1.5, 2.5, 1.5], rotation: [-35, 0, 40], intensity: 2.4, angle: 1.5 })]
  });
}
function tn() {
  const s = y({ name: "Ground", baseColor: "#bdbdbd", roughness: 0.8 }), e = y({ name: "Clay", baseColor: "#d6d0c8", roughness: 0.6 });
  return oe({
    name: "Empty",
    camera: { target: [0, 0.5, 0], yaw: 20, pitch: 18, distance: 4, fov: 38 },
    environment: { type: "sky", intensity: 0.45 },
    materials: [s, e],
    objects: [
      v("plane", { name: "Ground", position: [0, 0, 0], scale: [10, 1, 10], materialId: s.id }),
      v("sphere", { name: "Sphere", position: [0, 0.5, 0], materialId: e.id })
    ],
    lights: [O("sun", { name: "Sun", intensity: 2.4, angle: 1 })]
  });
}
const Xe = [
  { id: "studio", label: "Studio", create: Kt },
  { id: "cornell", label: "Cornell box", create: Jt },
  { id: "roughness", label: "Roughness ramp", create: Zt },
  { id: "materials", label: "Material showcase", create: Qt },
  { id: "primitives", label: "Primitives", create: en },
  { id: "empty", label: "Empty", create: tn }
];
function xe(s) {
  return (Xe.find((e) => e.id === s) ?? Xe[0]).create();
}
function nt(s) {
  let e = "";
  for (let t = 0; t < s.length; t += 32768) e += String.fromCharCode(...s.subarray(t, t + 32768));
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function nn(s) {
  const e = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4), t = atob(e), n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) n[i] = t.charCodeAt(i);
  return n;
}
async function bt(s, e) {
  const t = new Response(new Blob([s]).stream().pipeThrough(e));
  return new Uint8Array(await t.arrayBuffer());
}
function sn(s) {
  return JSON.stringify(s, (e, t) => typeof t == "number" ? Math.round(t * 1e4) / 1e4 : t);
}
async function rn(s) {
  const e = new TextEncoder().encode(sn(s));
  return typeof CompressionStream < "u" ? "z" + nt(await bt(e, new CompressionStream("deflate-raw"))) : "j" + nt(e);
}
async function on(s) {
  const e = s[0];
  let t = nn(s.slice(1));
  if (e === "z") t = await bt(t, new DecompressionStream("deflate-raw"));
  else if (e !== "j") throw new Error("Unknown scene encoding");
  return A(JSON.parse(new TextDecoder().decode(t)));
}
async function an(s) {
  const e = /[#&]s=([A-Za-z0-9_-]+)/.exec(s);
  if (!e) return null;
  try {
    return await on(e[1]);
  } catch {
    return null;
  }
}
class U extends Error {
}
function ln(s) {
  const e = s.getContext("webgl2", {
    antialias: !1,
    alpha: !1,
    depth: !1,
    stencil: !1,
    preserveDrawingBuffer: !0,
    powerPreference: "high-performance"
  });
  if (!e) throw new U("WebGL2 is not available in this browser.");
  if (!e.getExtension("EXT_color_buffer_float"))
    throw new U("This GPU cannot render to floating point textures (EXT_color_buffer_float).");
  return e;
}
function it(s, e, t) {
  const n = s.createShader(e);
  if (!n) throw new U("Could not create shader.");
  if (s.shaderSource(n, t), s.compileShader(n), !s.getShaderParameter(n, s.COMPILE_STATUS)) {
    const i = s.getShaderInfoLog(n) ?? "unknown error";
    throw s.deleteShader(n), new U(`Shader compilation failed:
${i}`);
  }
  return n;
}
class st {
  constructor(e, t, n) {
    this.gl = e;
    const i = e.createProgram();
    if (!i) throw new U("Could not create program.");
    const r = it(e, e.VERTEX_SHADER, t), a = it(e, e.FRAGMENT_SHADER, n);
    if (e.attachShader(i, r), e.attachShader(i, a), e.bindAttribLocation(i, 0, "aPosition"), e.linkProgram(i), e.deleteShader(r), e.deleteShader(a), !e.getProgramParameter(i, e.LINK_STATUS))
      throw new U(`Program link failed:
${e.getProgramInfoLog(i) ?? "unknown error"}`);
    this.handle = i;
  }
  gl;
  handle;
  locations = /* @__PURE__ */ new Map();
  use() {
    this.gl.useProgram(this.handle);
  }
  /** Cached uniform lookup. Returns null for uniforms the compiler optimized away. */
  location(e) {
    return this.locations.has(e) || this.locations.set(e, this.gl.getUniformLocation(this.handle, e)), this.locations.get(e) ?? null;
  }
}
function cn(s) {
  const e = s.createVertexArray(), t = s.createBuffer();
  if (!e || !t) throw new U("Could not create vertex buffers.");
  return s.bindVertexArray(e), s.bindBuffer(s.ARRAY_BUFFER, t), s.bufferData(s.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), s.STATIC_DRAW), s.enableVertexAttribArray(0), s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0), s.bindVertexArray(null), e;
}
class rt {
  constructor(e, t, n) {
    this.gl = e, this.width = t, this.height = n;
    const i = e.createTexture(), r = e.createFramebuffer();
    if (!i || !r) throw new U("Could not allocate render target.");
    if (e.bindTexture(e.TEXTURE_2D, i), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA32F, t, n, 0, e.RGBA, e.FLOAT, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.bindFramebuffer(e.FRAMEBUFFER, r), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0), e.checkFramebufferStatus(e.FRAMEBUFFER) !== e.FRAMEBUFFER_COMPLETE)
      throw new U("Float framebuffer is incomplete on this device.");
    e.bindFramebuffer(e.FRAMEBUFFER, null), this.texture = i, this.framebuffer = r;
  }
  gl;
  width;
  height;
  texture;
  framebuffer;
  dispose() {
    this.gl.deleteTexture(this.texture), this.gl.deleteFramebuffer(this.framebuffer);
  }
}
class _e {
  constructor(e) {
    this.gl = e;
    const t = e.createTexture();
    if (!t) throw new U("Could not allocate data texture.");
    this.texture = t, e.bindTexture(e.TEXTURE_2D, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
  }
  gl;
  texture;
  width = 0;
  height = 0;
  /** Uploads `data`, laid out as rows of `texelsPerRow` RGBA texels. */
  upload(e, t) {
    const n = this.gl, i = Math.max(1, Math.ceil(e.length / (t * 4)));
    n.bindTexture(n.TEXTURE_2D, this.texture), (t !== this.width || i > this.height) && (this.width = t, this.height = Math.max(i, this.height * 2, 8), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA32F, this.width, this.height, 0, n.RGBA, n.FLOAT, null)), n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, t, i, n.RGBA, n.FLOAT, e, 0);
  }
  dispose() {
    this.gl.deleteTexture(this.texture);
  }
}
const qe = 6, We = 5, Ve = 5, hn = { area: 0, sphere: 1, point: 2, sun: 3 };
function dn(s, e, t) {
  const n = R(X(s.color), s.intensity), i = Ae(s), r = hn[s.type];
  let a = 1, o = 0, l = s.position, c = 0;
  if (s.type === "sun") {
    l = ie(ne(s.rotation), [0, 1, 0]);
    const d = s.angle * $ / 2;
    if (d > 1e-5) {
      a = Math.cos(d), o = 2 * Math.sin(d / 2) ** 2;
      const u = 2 * Math.PI * o;
      n[0] /= u, n[1] /= u, n[2] /= u;
    }
  } else s.type === "area" && (c = 4 * ge(Be(i.u, i.v)));
  e.set([r, s.visible ? 1 : 0, a, o], t), e.set([...l, s.radius], t + 4), e.set([...i.u, 0], t + 8), e.set([...i.v, 0], t + 12), e.set([...n, c], t + 16);
}
function pn(s) {
  const e = new Map(s.materials.map((p, g) => [p.id, g])), t = new Float32Array(Math.max(1, s.materials.length) * We * 4);
  s.materials.forEach((p, g) => {
    const m = g * We * 4, w = R(X(p.emission), p.emissionStrength);
    t.set([...X(p.baseColor), p.metallic], m), t.set([...w, p.roughness], m + 4), t.set([p.specular, p.transmission, p.ior, p.clearcoat], m + 8), t.set([...X(p.patternColor), p.patternScale], m + 12), t.set([p.clearcoatRoughness, p.pattern === "checker" ? 1 : 0, 0, 0], m + 16);
  });
  const n = s.objects.filter((p) => p.visible), i = new Float32Array(Math.max(1, n.length) * qe * 4);
  n.forEach((p, g) => {
    const m = g * qe * 4, w = Ie(p);
    i.set([be.indexOf(p.shape), e.get(p.materialId) ?? 0, 0, 0], m), i.set(w.inverse, m + 4), i.set([...w.center, w.boundRadius], m + 16), i.set([...p.scale, 0], m + 20);
  });
  const r = s.lights.filter((p) => p.enabled && p.intensity > 0), a = new Float32Array(Math.max(1, r.length) * Ve * 4);
  r.forEach((p, g) => dn(p, a, g * Ve * 4));
  const o = B(s.camera), l = s.environment, c = l.intensity, d = l.type === "color" ? [X(l.color)] : [X(l.zenith), X(l.horizon), X(l.ground)], u = new Float32Array([
    ...o.position,
    ...o.right,
    ...o.up,
    ...o.forward,
    o.tanHalfFov,
    s.camera.aperture,
    o.focusDistance,
    l.type === "color" ? 0 : 1,
    ...d.flatMap((p) => R(p, c)),
    ...l.type === "color" ? [0, 0, 0, 0, 0, 0] : [],
    s.render.maxBounces,
    s.render.clamp
  ]);
  return {
    objects: i,
    objectCount: n.length,
    materials: t,
    materialCount: s.materials.length,
    lights: a,
    lightCount: r.length,
    uniforms: u
  };
}
const E = {
  camPos: 0,
  camRight: 3,
  camUp: 6,
  camForward: 9,
  tanHalfFov: 12,
  aperture: 13,
  focus: 14,
  envType: 15,
  envA: 16,
  envB: 19,
  envC: 22,
  maxBounces: 25,
  clamp: 26
}, ot = `#version 300 es
in vec2 aPosition;

void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, un = `#version 300 es
// Unidirectional path tracer: one sample per pixel per pass, blended into a running average.
// Materials follow a metallic-roughness model (Lambert + GGX specular + clearcoat + rough
// dielectric transmission). Direct light uses next event estimation combined with BSDF
// sampling through multiple importance sampling (power heuristic).
precision highp float;
precision highp int;
precision highp sampler2D;

#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define INV_PI 0.31830988618
#define INF 1e20
#define MAX_BOUNCES_LIMIT 32

#define SHAPE_SPHERE 0
#define SHAPE_BOX 1
#define SHAPE_CYLINDER 2
#define SHAPE_CONE 3
#define SHAPE_PLANE 4
#define SHAPE_DISK 5

#define LIGHT_AREA 0
#define LIGHT_SPHERE 1
#define LIGHT_POINT 2
#define LIGHT_SUN 3

uniform sampler2D uAccum;
uniform sampler2D uObjects;
uniform sampler2D uMaterials;
uniform sampler2D uLights;
uniform int uObjectCount;
uniform int uLightCount;

uniform vec2 uResolution;
uniform float uSamples;
uniform uint uSeed;
uniform int uMaxBounces;
uniform float uClamp;

uniform vec3 uCamPos;
uniform vec3 uCamRight;
uniform vec3 uCamUp;
uniform vec3 uCamForward;
uniform float uTanHalfFov;
uniform float uAperture;
uniform float uFocusDistance;

uniform int uEnvType;
uniform vec3 uEnvA; // color, or zenith
uniform vec3 uEnvB; // horizon
uniform vec3 uEnvC; // ground

out vec4 fragColor;

// ---------------------------------------------------------------- random

uint rngState;

uint pcgHash(uint v) {
  uint state = v * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}

float rand() {
  rngState = pcgHash(rngState);
  return float(rngState) * (1.0 / 4294967296.0);
}

vec2 rand2() {
  return vec2(rand(), rand());
}

// ---------------------------------------------------------------- helpers

float luminance(vec3 c) {
  return dot(c, vec3(0.2126, 0.7152, 0.0722));
}

void basis(vec3 n, out vec3 t, out vec3 b) {
  float s = n.z >= 0.0 ? 1.0 : -1.0;
  float a = -1.0 / (s + n.z);
  float k = n.x * n.y * a;
  t = vec3(1.0 + s * n.x * n.x * a, s * k, -s * n.x);
  b = vec3(k, s + n.y * n.y * a, -n.y);
}

vec3 toWorld(vec3 v, vec3 n) {
  vec3 t, b;
  basis(n, t, b);
  return t * v.x + b * v.y + n * v.z;
}

vec3 toLocal(vec3 v, vec3 n) {
  vec3 t, b;
  basis(n, t, b);
  return vec3(dot(v, t), dot(v, b), dot(v, n));
}

vec2 sampleDisk(vec2 u) {
  float r = sqrt(u.x);
  float a = TWO_PI * u.y;
  return r * vec2(cos(a), sin(a));
}

vec3 sampleCosine(vec3 n) {
  vec2 d = sampleDisk(rand2());
  return toWorld(vec3(d, sqrt(max(0.0, 1.0 - dot(d, d)))), n);
}

/** Uniform direction inside a cone around \`axis\`, given 1 - cos(max angle). */
vec3 sampleCone(vec3 axis, float oneMinusCosMax) {
  vec2 u = rand2();
  float cosT = 1.0 - u.x * oneMinusCosMax;
  float sinT = sqrt(max(0.0, 1.0 - cosT * cosT));
  float phi = TWO_PI * u.y;
  return toWorld(vec3(cos(phi) * sinT, sin(phi) * sinT, cosT), axis);
}

float powerHeuristic(float a, float b) {
  float a2 = a * a;
  float b2 = b * b;
  return a2 + b2 > 0.0 ? a2 / (a2 + b2) : 0.0;
}

// ---------------------------------------------------------------- scene data

vec4 objectTexel(int i, int k) { return texelFetch(uObjects, ivec2(k, i), 0); }
vec4 materialTexel(int i, int k) { return texelFetch(uMaterials, ivec2(k, i), 0); }
vec4 lightTexel(int i, int k) { return texelFetch(uLights, ivec2(k, i), 0); }

struct Material {
  vec3 base;
  float metallic;
  vec3 emission;
  float roughness;
  float specular;
  float transmission;
  float ior;
  float clearcoat;
  float clearcoatRoughness;
};

Material loadMaterial(int index, vec3 localP) {
  vec4 t0 = materialTexel(index, 0);
  vec4 t1 = materialTexel(index, 1);
  vec4 t2 = materialTexel(index, 2);
  vec4 t3 = materialTexel(index, 3);
  vec4 t4 = materialTexel(index, 4);
  Material m;
  m.base = t0.rgb;
  m.metallic = t0.a;
  m.emission = t1.rgb;
  m.roughness = t1.a;
  m.specular = t2.x;
  m.transmission = t2.y;
  m.ior = max(t2.z, 1.0001);
  m.clearcoat = t2.w;
  m.clearcoatRoughness = t4.x;
  if (t4.y > 0.5) {
    vec3 cell = floor(localP * t3.a + 1e-3);
    float checker = mod(cell.x + cell.y + cell.z, 2.0);
    m.base = mix(m.base, t3.rgb, checker);
  }
  return m;
}

// ---------------------------------------------------------------- intersection

struct Hit {
  float t;
  vec3 normal;   // world space, outward
  vec3 localP;   // object space hit point in world units (patterns)
  int material;  // -1 when not an object
  int light;     // -1 when not a light
};

/** Updates t and the local normal when the root is closer. */
void considerRoot(float t, vec3 n, float tMin, inout float best, inout vec3 bestN) {
  if (t > tMin && t < best) {
    best = t;
    bestN = n;
  }
}

/** Unit shapes inside [-0.5, 0.5]^3. d is not normalized, so t is the world distance. */
bool intersectShape(int shape, vec3 o, vec3 d, float tMax, out float tHit, out vec3 nLocal) {
  const float tMin = 1e-5;
  float best = tMax;
  vec3 bestN = vec3(0.0);

  if (shape == SHAPE_SPHERE) {
    float a = dot(d, d);
    float b = dot(o, d);
    float c = dot(o, o) - 0.25;
    float disc = b * b - a * c;
    if (disc < 0.0) return false;
    float s = sqrt(disc);
    float t0 = (-b - s) / a;
    float t1 = (-b + s) / a;
    considerRoot(t0, (o + d * t0) * 2.0, tMin, best, bestN);
    if (best == tMax) considerRoot(t1, (o + d * t1) * 2.0, tMin, best, bestN);
  } else if (shape == SHAPE_BOX) {
    vec3 inv = 1.0 / d;
    vec3 ta = (vec3(-0.5) - o) * inv;
    vec3 tb = (vec3(0.5) - o) * inv;
    vec3 tmin3 = min(ta, tb);
    vec3 tmax3 = max(ta, tb);
    float tNear = max(max(tmin3.x, tmin3.y), tmin3.z);
    float tFar = min(min(tmax3.x, tmax3.y), tmax3.z);
    if (tNear > tFar) return false;
    float t = tNear > tMin ? tNear : tFar;
    if (t > tMin && t < best) {
      vec3 p = o + d * t;
      vec3 ap = abs(p);
      vec3 n = ap.x > ap.y && ap.x > ap.z ? vec3(sign(p.x), 0.0, 0.0) : (ap.y > ap.z ? vec3(0.0, sign(p.y), 0.0) : vec3(0.0, 0.0, sign(p.z)));
      best = t;
      bestN = n;
    }
  } else if (shape == SHAPE_CYLINDER) {
    float a = d.x * d.x + d.z * d.z;
    float b = o.x * d.x + o.z * d.z;
    float c = o.x * o.x + o.z * o.z - 0.25;
    float disc = b * b - a * c;
    if (a > 1e-12 && disc >= 0.0) {
      float s = sqrt(disc);
      for (int k = 0; k < 2; k++) {
        float t = (-b + (k == 0 ? -s : s)) / a;
        vec3 p = o + d * t;
        if (abs(p.y) <= 0.5) considerRoot(t, vec3(p.x, 0.0, p.z), tMin, best, bestN);
      }
    }
    if (abs(d.y) > 1e-12) {
      for (int k = 0; k < 2; k++) {
        float y = k == 0 ? -0.5 : 0.5;
        float t = (y - o.y) / d.y;
        vec3 p = o + d * t;
        if (p.x * p.x + p.z * p.z <= 0.25) considerRoot(t, vec3(0.0, y, 0.0), tMin, best, bestN);
      }
    }
  } else if (shape == SHAPE_CONE) {
    float s0 = 0.5 - o.y;
    float a = d.x * d.x + d.z * d.z - d.y * d.y * 0.25;
    float b = o.x * d.x + o.z * d.z + s0 * d.y * 0.25;
    float c = o.x * o.x + o.z * o.z - s0 * s0 * 0.25;
    if (abs(a) > 1e-12) {
      float disc = b * b - a * c;
      if (disc >= 0.0) {
        float s = sqrt(disc);
        for (int k = 0; k < 2; k++) {
          float t = (-b + (k == 0 ? -s : s)) / a;
          vec3 p = o + d * t;
          if (p.y >= -0.5 && p.y <= 0.5) considerRoot(t, vec3(2.0 * p.x, (0.5 - p.y) * 0.5, 2.0 * p.z), tMin, best, bestN);
        }
      }
    }
    if (abs(d.y) > 1e-12) {
      float t = (-0.5 - o.y) / d.y;
      vec3 p = o + d * t;
      if (p.x * p.x + p.z * p.z <= 0.25) considerRoot(t, vec3(0.0, -1.0, 0.0), tMin, best, bestN);
    }
  } else {
    if (abs(d.y) < 1e-12) return false;
    float t = -o.y / d.y;
    vec3 p = o + d * t;
    bool inside = shape == SHAPE_PLANE ? (abs(p.x) <= 0.5 && abs(p.z) <= 0.5) : (p.x * p.x + p.z * p.z <= 0.25);
    if (inside) considerRoot(t, vec3(0.0, 1.0, 0.0), tMin, best, bestN);
  }

  if (best < tMax) {
    tHit = best;
    nLocal = bestN;
    return true;
  }
  return false;
}

/** Ray against a bounding sphere: false when the sphere is missed or entirely farther than tMax. */
bool boundCheck(vec3 ro, vec3 rd, vec4 bound, float tMax) {
  vec3 oc = ro - bound.xyz;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - bound.w * bound.w;
  float disc = b * b - c;
  if (disc < 0.0) return false;
  float s = sqrt(disc);
  return -b + s > 0.0 && -b - s < tMax;
}

/** Visible emitter geometry: area rectangles (front side only) and spheres. */
bool intersectLight(int i, vec3 ro, vec3 rd, float tMax, out float tHit, out vec3 n) {
  vec4 t0 = lightTexel(i, 0);
  int type = int(t0.x + 0.5);
  if (t0.y < 0.5) return false;
  vec4 t1 = lightTexel(i, 1);
  if (type == LIGHT_AREA) {
    vec3 u = lightTexel(i, 2).xyz;
    vec3 v = lightTexel(i, 3).xyz;
    vec3 normal = normalize(cross(u, v));
    float denom = dot(rd, normal);
    if (denom >= -1e-7) return false;
    float t = dot(t1.xyz - ro, normal) / denom;
    if (t <= 1e-5 || t >= tMax) return false;
    vec3 rel = ro + rd * t - t1.xyz;
    if (abs(dot(rel, u)) > dot(u, u) || abs(dot(rel, v)) > dot(v, v)) return false;
    tHit = t;
    n = normal;
    return true;
  }
  if (type == LIGHT_SPHERE) {
    vec3 oc = ro - t1.xyz;
    float b = dot(oc, rd);
    float c = dot(oc, oc) - t1.w * t1.w;
    float disc = b * b - c;
    if (disc < 0.0) return false;
    float s = sqrt(disc);
    float t = -b - s;
    if (t <= 1e-5) return false;
    if (t >= tMax) return false;
    tHit = t;
    n = (ro + rd * t - t1.xyz) / t1.w;
    return true;
  }
  return false;
}

Hit traceScene(vec3 ro, vec3 rd) {
  Hit hit;
  hit.t = INF;
  hit.normal = vec3(0.0, 1.0, 0.0);
  hit.localP = vec3(0.0);
  hit.material = -1;
  hit.light = -1;

  for (int i = 0; i < uObjectCount; i++) {
    if (!boundCheck(ro, rd, objectTexel(i, 4), hit.t)) continue;
    vec4 r0 = objectTexel(i, 1);
    vec4 r1 = objectTexel(i, 2);
    vec4 r2 = objectTexel(i, 3);
    vec3 o = vec3(dot(r0.xyz, ro) + r0.w, dot(r1.xyz, ro) + r1.w, dot(r2.xyz, ro) + r2.w);
    vec3 d = vec3(dot(r0.xyz, rd), dot(r1.xyz, rd), dot(r2.xyz, rd));
    float t;
    vec3 nl;
    if (intersectShape(int(objectTexel(i, 0).x + 0.5), o, d, hit.t, t, nl)) {
      hit.t = t;
      hit.normal = normalize(nl.x * r0.xyz + nl.y * r1.xyz + nl.z * r2.xyz);
      hit.localP = (o + d * t) * objectTexel(i, 5).xyz;
      hit.material = int(objectTexel(i, 0).y + 0.5);
      hit.light = -1;
    }
  }

  for (int i = 0; i < uLightCount; i++) {
    float t;
    vec3 n;
    if (intersectLight(i, ro, rd, hit.t, t, n)) {
      hit.t = t;
      hit.normal = n;
      hit.light = i;
      hit.material = -1;
    }
  }
  return hit;
}

/** Any-hit query for shadow rays. Lights only block other lights when visible. */
bool occluded(vec3 ro, vec3 rd, float maxT) {
  for (int i = 0; i < uObjectCount; i++) {
    if (!boundCheck(ro, rd, objectTexel(i, 4), maxT)) continue;
    vec4 r0 = objectTexel(i, 1);
    vec4 r1 = objectTexel(i, 2);
    vec4 r2 = objectTexel(i, 3);
    vec3 o = vec3(dot(r0.xyz, ro) + r0.w, dot(r1.xyz, ro) + r1.w, dot(r2.xyz, ro) + r2.w);
    vec3 d = vec3(dot(r0.xyz, rd), dot(r1.xyz, rd), dot(r2.xyz, rd));
    float t;
    vec3 nl;
    if (intersectShape(int(objectTexel(i, 0).x + 0.5), o, d, maxT, t, nl)) return true;
  }
  return false;
}

// ---------------------------------------------------------------- environment

vec3 environment(vec3 d) {
  if (uEnvType == 0) return uEnvA;
  if (d.y >= 0.0) return mix(uEnvB, uEnvA, pow(d.y, 0.6));
  return mix(uEnvB, uEnvC, pow(-d.y, 0.4));
}

// ---------------------------------------------------------------- microfacet BSDF

vec3 fresnelSchlick(vec3 f0, float cosT) {
  float m = clamp(1.0 - cosT, 0.0, 1.0);
  float m2 = m * m;
  return f0 + (1.0 - f0) * (m2 * m2 * m);
}

float fresnelDielectric(float cosI, float eta) {
  // eta = n_incident / n_transmitted
  float sinT2 = eta * eta * (1.0 - cosI * cosI);
  if (sinT2 >= 1.0) return 1.0;
  float cosT = sqrt(1.0 - sinT2);
  float rs = (eta * cosI - cosT) / (eta * cosI + cosT);
  float rp = (cosI - eta * cosT) / (cosI + eta * cosT);
  return 0.5 * (rs * rs + rp * rp);
}

float ggxD(float NoH, float a) {
  float a2 = a * a;
  float d = NoH * NoH * (a2 - 1.0) + 1.0;
  return a2 / (PI * d * d);
}

float smithG1(float NoX, float a) {
  float a2 = a * a;
  return 2.0 * NoX / (NoX + sqrt(a2 + (1.0 - a2) * NoX * NoX));
}

/** Visible normal sampling (Heitz 2018). v is in tangent space with z up. */
vec3 sampleVndf(vec3 v, float a, vec2 u) {
  vec3 vh = normalize(vec3(a * v.x, a * v.y, v.z));
  float lensq = vh.x * vh.x + vh.y * vh.y;
  vec3 t1 = lensq > 0.0 ? vec3(-vh.y, vh.x, 0.0) * inversesqrt(lensq) : vec3(1.0, 0.0, 0.0);
  vec3 t2 = cross(vh, t1);
  float r = sqrt(u.x);
  float phi = TWO_PI * u.y;
  float p1 = r * cos(phi);
  float p2 = r * sin(phi);
  float s = 0.5 * (1.0 + vh.z);
  p2 = (1.0 - s) * sqrt(max(0.0, 1.0 - p1 * p1)) + s * p2;
  vec3 nh = p1 * t1 + p2 * t2 + sqrt(max(0.0, 1.0 - p1 * p1 - p2 * p2)) * vh;
  return normalize(vec3(a * nh.x, a * nh.y, max(1e-6, nh.z)));
}

/** pdf of a reflected direction drawn with VNDF sampling. */
float vndfReflectPdf(float NoV, float NoH, float a) {
  return smithG1(NoV, a) * ggxD(NoH, a) / (4.0 * NoV);
}

float alphaOf(float roughness) {
  return max(1e-3, roughness * roughness);
}

/** Lobe selection probabilities for the current view direction. */
struct Lobes {
  float diffuse;
  float specular;
  float clearcoat;
  float transmission;
  vec3 f0;
  float opaque;      // energy of the opaque (non transmissive) part
  float diffuseWeight;
  float transWeight; // energy of the transmissive part
};

Lobes lobes(Material m, float NoV) {
  Lobes l;
  l.f0 = mix(vec3(0.08 * m.specular), m.base, m.metallic);
  float trans = (1.0 - m.metallic) * m.transmission;
  l.opaque = 1.0 - trans;
  l.transWeight = trans;
  l.diffuseWeight = (1.0 - m.metallic) * (1.0 - m.transmission);
  float wd = l.diffuseWeight * luminance(m.base);
  float ws = l.opaque * luminance(fresnelSchlick(l.f0, NoV));
  float wc = m.clearcoat * 0.25;
  float wt = trans;
  float sum = wd + ws + wc + wt;
  if (sum <= 0.0) {
    l.diffuse = 1.0;
    l.specular = 0.0;
    l.clearcoat = 0.0;
    l.transmission = 0.0;
    return l;
  }
  l.diffuse = wd / sum;
  l.specular = ws / sum;
  l.clearcoat = wc / sum;
  l.transmission = wt / sum;
  return l;
}

/**
 * Reflection part of the BSDF times the cosine term, for directions above the surface.
 * pdf receives the density of producing wi with the reflective lobes (used by MIS).
 */
vec3 evalReflection(Material m, Lobes l, vec3 n, vec3 wo, vec3 wi, out float pdf) {
  pdf = 0.0;
  float NoL = dot(n, wi);
  float NoV = dot(n, wo);
  if (NoL <= 0.0 || NoV <= 0.0) return vec3(0.0);
  vec3 h = normalize(wo + wi);
  float NoH = max(dot(n, h), 0.0);
  float VoH = max(dot(wo, h), 0.0);

  float a = alphaOf(m.roughness);
  vec3 F = fresnelSchlick(l.f0, VoH);
  float D = ggxD(NoH, a);
  float G = smithG1(NoV, a) * smithG1(NoL, a);
  vec3 spec = l.opaque * F * D * G / (4.0 * NoV * NoL);

  float ac = alphaOf(m.clearcoatRoughness);
  float Fc = fresnelSchlick(vec3(0.04), VoH).x * m.clearcoat;
  float Dc = ggxD(NoH, ac);
  float coat = Fc * Dc * smithG1(NoV, ac) * smithG1(NoL, ac) / (4.0 * NoV * NoL);

  vec3 diffuse = l.diffuseWeight * m.base * INV_PI * (1.0 - F);

  pdf = l.diffuse * NoL * INV_PI
      + l.specular * vndfReflectPdf(NoV, NoH, a)
      + l.clearcoat * vndfReflectPdf(NoV, NoH, ac);
  return ((diffuse + spec) * (1.0 - Fc) + coat) * NoL;
}

// ---------------------------------------------------------------- lights

struct LightSample {
  vec3 wi;
  float dist;
  vec3 radiance;
  float pdf;    // solid angle pdf, excluding the light selection probability
  bool delta;   // cannot be hit by BSDF rays: no MIS
};

bool sampleLight(int i, vec3 p, out LightSample s) {
  vec4 t0 = lightTexel(i, 0);
  vec4 t1 = lightTexel(i, 1);
  vec4 t4 = lightTexel(i, 4);
  int type = int(t0.x + 0.5);
  s.radiance = t4.rgb;
  s.delta = t0.y < 0.5;

  if (type == LIGHT_AREA) {
    vec3 u = lightTexel(i, 2).xyz;
    vec3 v = lightTexel(i, 3).xyz;
    vec2 r = rand2() * 2.0 - 1.0;
    vec3 q = t1.xyz + u * r.x + v * r.y;
    vec3 d = q - p;
    float dist2 = dot(d, d);
    s.dist = sqrt(dist2);
    s.wi = d / s.dist;
    float cosL = -dot(s.wi, normalize(cross(u, v)));
    if (cosL <= 0.0) return false;
    s.pdf = dist2 / (cosL * t4.a);
    return true;
  }
  if (type == LIGHT_SPHERE) {
    vec3 d = t1.xyz - p;
    float dc2 = dot(d, d);
    float r2 = t1.w * t1.w;
    if (dc2 <= r2) return false;
    float dc = sqrt(dc2);
    float sin2 = r2 / dc2;
    float omc = sin2 / (1.0 + sqrt(1.0 - sin2)); // 1 - cos(theta max), stable
    s.wi = sampleCone(d / dc, omc);
    // Distance to the near side of the sphere along wi.
    float b = dot(s.wi, d);
    s.dist = b - sqrt(max(0.0, r2 - (dc2 - b * b)));
    s.pdf = 1.0 / (TWO_PI * omc);
    return true;
  }
  if (type == LIGHT_POINT) {
    vec3 d = t1.xyz - p;
    float dist2 = max(dot(d, d), 1e-8);
    s.dist = sqrt(dist2);
    s.wi = d / s.dist;
    s.radiance = t4.rgb / dist2;
    s.pdf = 1.0;
    s.delta = true;
    return true;
  }
  // Sun: t1.xyz is the direction towards the sun.
  s.dist = INF;
  if (t0.w > 0.0) {
    s.wi = sampleCone(t1.xyz, t0.w);
    s.pdf = 1.0 / (TWO_PI * t0.w);
  } else {
    s.wi = t1.xyz;
    s.pdf = 1.0;
    s.delta = true;
  }
  return true;
}

/** Solid angle pdf of light i producing direction rd from p, for a BSDF ray that hit it at distance t. */
float lightPdf(int i, vec3 p, vec3 rd, float t, vec3 n) {
  vec4 t0 = lightTexel(i, 0);
  int type = int(t0.x + 0.5);
  if (type == LIGHT_AREA) {
    float cosL = max(-dot(rd, n), 1e-6);
    return t * t / (cosL * lightTexel(i, 4).a);
  }
  if (type == LIGHT_SPHERE) {
    vec4 t1 = lightTexel(i, 1);
    vec3 d = t1.xyz - p;
    float dc2 = dot(d, d);
    float sin2 = min(t1.w * t1.w / dc2, 1.0);
    float omc = sin2 / (1.0 + sqrt(1.0 - sin2));
    return 1.0 / (TWO_PI * max(omc, 1e-9));
  }
  if (type == LIGHT_SUN) return 1.0 / (TWO_PI * t0.w);
  return 0.0;
}

/** Radiance of the sky plus the sun disks, for a ray that escaped the scene. */
vec3 escaped(vec3 rd, vec3 p, float lastPdf, bool lastSpecular, float selectPdf) {
  vec3 color = environment(rd);
  for (int i = 0; i < uLightCount; i++) {
    vec4 t0 = lightTexel(i, 0);
    if (int(t0.x + 0.5) != LIGHT_SUN || t0.w <= 0.0 || t0.y < 0.5) continue;
    if (dot(rd, lightTexel(i, 1).xyz) < t0.z) continue;
    float w = lastSpecular ? 1.0 : powerHeuristic(lastPdf, lightPdf(i, p, rd, INF, vec3(0.0)) * selectPdf);
    color += lightTexel(i, 4).rgb * w;
  }
  return color;
}

// ---------------------------------------------------------------- path

vec3 radiance(vec3 ro, vec3 rd) {
  vec3 color = vec3(0.0);
  vec3 throughput = vec3(1.0);
  float lastPdf = 0.0;
  bool lastSpecular = true;
  float selectPdf = uLightCount > 0 ? 1.0 / float(uLightCount) : 0.0;

  for (int bounce = 0; bounce < MAX_BOUNCES_LIMIT; bounce++) {
    if (bounce >= uMaxBounces) break;
    Hit hit = traceScene(ro, rd);

    if (hit.t >= INF) {
      color += throughput * escaped(rd, ro, lastPdf, lastSpecular, selectPdf);
      break;
    }

    vec3 p = ro + rd * hit.t;

    if (hit.light >= 0) {
      float w = lastSpecular ? 1.0 : powerHeuristic(lastPdf, lightPdf(hit.light, ro, rd, hit.t, hit.normal) * selectPdf);
      color += throughput * lightTexel(hit.light, 4).rgb * w;
      break;
    }

    Material m = loadMaterial(hit.material, hit.localP);
    color += throughput * m.emission;

    vec3 wo = -rd;
    vec3 ng = hit.normal;
    bool entering = dot(wo, ng) > 0.0;
    vec3 n = entering ? ng : -ng; // faces the viewer
    float NoV = max(dot(n, wo), 1e-4);
    Lobes l = lobes(m, NoV);
    float eps = 1e-4 * (1.0 + max(max(abs(p.x), abs(p.y)), abs(p.z)));

    // Next event estimation through the reflective lobes.
    bool reflective = l.transmission < 1.0;
    if (uLightCount > 0 && reflective) {
      int li = min(int(rand() * float(uLightCount)), uLightCount - 1);
      LightSample ls;
      if (sampleLight(li, p, ls) && dot(ls.wi, n) > 0.0) {
        float bsdfPdf;
        vec3 f = evalReflection(m, l, n, wo, ls.wi, bsdfPdf);
        if (max(f.r, max(f.g, f.b)) > 0.0) {
          vec3 origin = p + n * eps;
          float maxT = ls.dist >= INF ? INF : ls.dist * (1.0 - 1e-3) - eps;
          if (!occluded(origin, ls.wi, maxT)) {
            float lp = ls.pdf * selectPdf;
            float w = ls.delta ? 1.0 : powerHeuristic(lp, bsdfPdf);
            color += throughput * f * ls.radiance * w / lp;
          }
        }
      }
    }

    // Sample the next direction.
    float u = rand();
    vec3 wi;
    if (u < l.transmission) {
      // Rough dielectric: pick a microfacet, then reflect or refract with the exact Fresnel term.
      float a = alphaOf(m.roughness);
      float eta = entering ? 1.0 / m.ior : m.ior;
      vec3 mh = toWorld(sampleVndf(toLocal(wo, n), a, rand2()), n);
      float cosI = dot(wo, mh);
      float F = fresnelDielectric(cosI, eta);
      bool refracted = false;
      if (rand() >= F) {
        wi = refract(-wo, mh, eta);
        refracted = dot(wi, wi) > 0.0;
      }
      if (!refracted) wi = reflect(-wo, mh);
      float NoL = dot(n, wi);
      if (refracted ? NoL >= 0.0 : NoL <= 0.0) break;
      throughput *= smithG1(abs(NoL), a) * l.transWeight / l.transmission;
      if (refracted && entering) throughput *= m.base;
      ro = p + (refracted ? -n : n) * eps;
      lastSpecular = true;
    } else {
      float v = (u - l.transmission) / max(1.0 - l.transmission, 1e-6);
      float pd = l.diffuse / max(1.0 - l.transmission, 1e-6);
      float ps = l.specular / max(1.0 - l.transmission, 1e-6);
      if (v < pd) {
        wi = sampleCosine(n);
      } else if (v < pd + ps) {
        vec3 mh = toWorld(sampleVndf(toLocal(wo, n), alphaOf(m.roughness), rand2()), n);
        wi = reflect(-wo, mh);
      } else {
        vec3 mh = toWorld(sampleVndf(toLocal(wo, n), alphaOf(m.clearcoatRoughness), rand2()), n);
        wi = reflect(-wo, mh);
      }
      float pdf;
      vec3 f = evalReflection(m, l, n, wo, wi, pdf);
      if (pdf <= 0.0) break;
      throughput *= f / pdf;
      ro = p + n * eps;
      lastPdf = pdf;
      lastSpecular = false;
    }
    rd = wi;

    // Russian roulette keeps the estimator unbiased while cutting long, dim paths.
    if (bounce > 2) {
      float survive = min(max(throughput.r, max(throughput.g, throughput.b)), 0.95);
      if (rand() > survive) break;
      throughput /= survive;
    }
  }
  return color;
}

void main() {
  uvec2 pixel = uvec2(gl_FragCoord.xy);
  rngState = pcgHash(pixel.x * 1973u + pixel.y * 9277u + uSeed * 26699u) | 1u;

  vec2 jitter = rand2();
  vec2 ndc = (gl_FragCoord.xy - 0.5 + jitter) / uResolution * 2.0 - 1.0;
  float aspect = uResolution.x / uResolution.y;
  // Vertical field of view in landscape, horizontal in portrait (see viewTanHalf in camera.ts).
  float tanHalf = aspect < 1.0 ? uTanHalfFov / aspect : uTanHalfFov;
  vec3 dir = normalize(uCamForward + uCamRight * (ndc.x * tanHalf * aspect) + uCamUp * (ndc.y * tanHalf));

  vec3 origin = uCamPos;
  if (uAperture > 0.0) {
    vec3 focusPoint = origin + dir * (uFocusDistance / dot(dir, uCamForward));
    vec2 lens = sampleDisk(rand2()) * uAperture;
    origin += uCamRight * lens.x + uCamUp * lens.y;
    dir = normalize(focusPoint - origin);
  }

  vec3 sampleColor = radiance(origin, dir);
  if (any(isnan(sampleColor)) || any(isinf(sampleColor))) sampleColor = vec3(0.0);
  float lum = luminance(sampleColor);
  if (uClamp > 0.0 && lum > uClamp) sampleColor *= uClamp / lum;

  vec3 previous = uSamples > 0.0 ? texelFetch(uAccum, ivec2(gl_FragCoord.xy), 0).rgb : vec3(0.0);
  fragColor = vec4(mix(previous, sampleColor, 1.0 / (uSamples + 1.0)), 1.0);
}
`, fn = `#version 300 es
// Tone maps the accumulated radiance and encodes it to sRGB.
precision highp float;

uniform sampler2D uAccum;
uniform float uExposure;   // linear multiplier
uniform int uToneMapping;  // 0 ACES, 1 Reinhard, 2 linear

out vec4 fragColor;

vec3 acesFilm(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

vec3 reinhard(vec3 x) {
  float l = dot(x, vec3(0.2126, 0.7152, 0.0722));
  return x / (1.0 + l);
}

vec3 toSrgb(vec3 linear) {
  vec3 low = linear * 12.92;
  vec3 high = 1.055 * pow(linear, vec3(1.0 / 2.4)) - 0.055;
  return mix(low, high, step(vec3(0.0031308), linear));
}

void main() {
  vec3 hdr = max(texelFetch(uAccum, ivec2(gl_FragCoord.xy), 0).rgb * uExposure, 0.0);
  vec3 ldr = uToneMapping == 0 ? acesFilm(hdr) : (uToneMapping == 1 ? reinhard(hdr) : clamp(hdr, 0.0, 1.0));
  vec3 srgb = toSrgb(clamp(ldr, 0.0, 1.0));
  // Half-LSB ordered dither hides banding in smooth gradients.
  float noise = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  fragColor = vec4(srgb + (noise - 0.5) / 255.0, 1.0);
}
`, mn = { aces: 0, reinhard: 1, linear: 2 };
function Te(s, e) {
  if (!s || s.length !== e.length) return !1;
  for (let t = 0; t < s.length; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
class vt {
  constructor(e) {
    this.canvas = e, this.gl = ln(e), this.trace = new st(this.gl, ot, un), this.display = new st(this.gl, ot, fn), this.triangle = cn(this.gl), this.objectTexture = new _e(this.gl), this.materialTexture = new _e(this.gl), this.lightTexture = new _e(this.gl);
  }
  canvas;
  gl;
  trace;
  display;
  triangle;
  objectTexture;
  materialTexture;
  lightTexture;
  targets = null;
  current = 0;
  seed = 1;
  packed = null;
  /** Samples per pixel accumulated so far. */
  samples = 0;
  /** Linear exposure multiplier used by the display pass. */
  exposure = 1;
  toneMapping = "aces";
  get width() {
    return this.canvas.width;
  }
  get height() {
    return this.canvas.height;
  }
  /** Sets the drawing buffer size in pixels. Returns true when it changed. */
  resize(e, t) {
    return e = Math.max(1, Math.round(e)), t = Math.max(1, Math.round(t)), this.targets && e === this.canvas.width && t === this.canvas.height ? !1 : (this.canvas.width = e, this.canvas.height = t, this.targets?.forEach((n) => n.dispose()), this.targets = [new rt(this.gl, e, t), new rt(this.gl, e, t)], this.reset(), !0);
  }
  reset() {
    this.samples = 0;
  }
  /** Uploads the scene if it changed. Returns true when the accumulation was restarted. */
  sync(e) {
    this.exposure = Math.pow(2, e.render.exposure), this.toneMapping = e.render.toneMapping;
    const t = pn(e), n = this.packed;
    let i = !1;
    return (!n || !Te(n.objects, t.objects) || n.objectCount !== t.objectCount) && (this.objectTexture.upload(t.objects, qe), i = !0), (!n || !Te(n.materials, t.materials)) && (this.materialTexture.upload(t.materials, We), i = !0), (!n || !Te(n.lights, t.lights) || n.lightCount !== t.lightCount) && (this.lightTexture.upload(t.lights, Ve), i = !0), (!n || !Te(n.uniforms, t.uniforms)) && (i = !0), this.packed = t, i && this.reset(), i;
  }
  /** Traces `passes` more samples per pixel and presents the running average. */
  render(e = 1) {
    if (!this.targets || !this.packed) return;
    const t = this.gl, n = this.trace, i = this.packed.uniforms;
    t.viewport(0, 0, this.width, this.height), t.bindVertexArray(this.triangle), n.use(), this.bindTexture(1, this.objectTexture.texture, "uObjects"), this.bindTexture(2, this.materialTexture.texture, "uMaterials"), this.bindTexture(3, this.lightTexture.texture, "uLights"), t.uniform1i(n.location("uObjectCount"), this.packed.objectCount), t.uniform1i(n.location("uLightCount"), this.packed.lightCount), t.uniform2f(n.location("uResolution"), this.width, this.height), t.uniform3fv(n.location("uCamPos"), i.subarray(E.camPos, E.camPos + 3)), t.uniform3fv(n.location("uCamRight"), i.subarray(E.camRight, E.camRight + 3)), t.uniform3fv(n.location("uCamUp"), i.subarray(E.camUp, E.camUp + 3)), t.uniform3fv(n.location("uCamForward"), i.subarray(E.camForward, E.camForward + 3)), t.uniform1f(n.location("uTanHalfFov"), i[E.tanHalfFov]), t.uniform1f(n.location("uAperture"), i[E.aperture]), t.uniform1f(n.location("uFocusDistance"), i[E.focus]), t.uniform1i(n.location("uEnvType"), i[E.envType]), t.uniform3fv(n.location("uEnvA"), i.subarray(E.envA, E.envA + 3)), t.uniform3fv(n.location("uEnvB"), i.subarray(E.envB, E.envB + 3)), t.uniform3fv(n.location("uEnvC"), i.subarray(E.envC, E.envC + 3)), t.uniform1i(n.location("uMaxBounces"), i[E.maxBounces]), t.uniform1f(n.location("uClamp"), i[E.clamp]), t.uniform1i(n.location("uAccum"), 0), t.activeTexture(t.TEXTURE0);
    for (let r = 0; r < e; r++) {
      const a = this.targets[this.current], o = this.targets[1 - this.current];
      t.bindFramebuffer(t.FRAMEBUFFER, o.framebuffer), t.bindTexture(t.TEXTURE_2D, a.texture), t.uniform1f(n.location("uSamples"), this.samples), t.uniform1ui(n.location("uSeed"), this.seed++ >>> 0), t.drawArrays(t.TRIANGLES, 0, 3), this.current = 1 - this.current, this.samples++;
    }
    this.present(), this.fenceFrame();
  }
  /** Re-runs only the display pass, e.g. after an exposure change. */
  present() {
    if (!this.targets) return;
    const e = this.gl;
    e.viewport(0, 0, this.width, this.height), e.bindVertexArray(this.triangle), this.display.use(), e.bindFramebuffer(e.FRAMEBUFFER, null), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, this.targets[this.current].texture), e.uniform1i(this.display.location("uAccum"), 0), e.uniform1f(this.display.location("uExposure"), this.exposure), e.uniform1i(this.display.location("uToneMapping"), mn[this.toneMapping]), e.drawArrays(e.TRIANGLES, 0, 3);
  }
  fence = null;
  /**
   * True while the GPU is still working on the previously submitted frame.
   * Callers skip a frame instead of queueing more work, which keeps input responsive.
   */
  busy() {
    const e = this.gl;
    return this.fence ? e.getSyncParameter(this.fence, e.SYNC_STATUS) !== e.SIGNALED ? !0 : (e.deleteSync(this.fence), this.fence = null, !1) : !1;
  }
  /** Marks the end of the submitted work so `busy()` can tell when the GPU caught up. */
  fenceFrame() {
    const e = this.gl;
    this.fence && e.deleteSync(this.fence), this.fence = e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE, 0), e.flush();
  }
  dispose() {
    this.targets?.forEach((e) => e.dispose()), this.targets = null, this.objectTexture.dispose(), this.materialTexture.dispose(), this.lightTexture.dispose(), this.gl.getExtension("WEBGL_lose_context")?.loseContext();
  }
  bindTexture(e, t, n) {
    const i = this.gl;
    i.activeTexture(i.TEXTURE0 + e), i.bindTexture(i.TEXTURE_2D, t), i.uniform1i(this.trace.location(n), e);
  }
}
function gn(s, e, t) {
  const n = y({
    id: "preview-floor",
    name: "Floor",
    baseColor: t === "dark" ? "#202020" : "#bdbdbd",
    roughness: 0.9,
    pattern: "checker",
    patternColor: t === "dark" ? "#141414" : "#8a8a8a",
    patternScale: 4
  }), i = { ...s, id: "preview-subject" };
  return A({
    name: "Preview",
    camera: { target: [0, 0.5, 0], yaw: 0, pitch: 14, distance: 2.35, fov: 32 },
    environment: t === "dark" ? { type: "color", color: "#0b0b0b", intensity: 1 } : { type: "sky", zenith: "#6b7380", horizon: "#d9dce0", ground: "#3a3a3a", intensity: 0.6 },
    render: { maxBounces: 6, maxSamples: 0, exposure: 0, toneMapping: "aces", clamp: 10 },
    materials: [n, i],
    objects: [
      v("plane", { position: [0, 0, 0], scale: [6, 1, 6], materialId: n.id }),
      v(e, {
        position: [0, 0.5, 0],
        rotation: e === "plane" || e === "disk" ? [65, 0, 0] : e === "box" ? [0, 35, 0] : [0, 0, 0],
        scale: e === "plane" || e === "disk" ? [0.95, 1, 0.95] : [0.9, 0.9, 0.9],
        materialId: i.id
      })
    ],
    lights: [
      O("area", { position: [-1.1, 2, 1.1], rotation: [-30, 0, -30], size: [1.4, 1.4], intensity: 5 }),
      O("area", { position: [1.6, 1.2, -0.6], rotation: [0, 0, 70], size: [0.6, 1.4], intensity: 2.5, color: "#dfe8ff", visible: !1 })
    ]
  });
}
class bn {
  canvas = null;
  renderer = null;
  failed = !1;
  jobs = [];
  current = null;
  handle = 0;
  enqueue(e, t, n) {
    for (const i of this.jobs)
      i.target === e && (i.cancelled = !0, i.resolve());
    return this.current?.target === e && (this.current.cancelled = !0), new Promise((i) => {
      this.jobs.push({ target: e, scene: t, samples: n, resolve: i, cancelled: !1 }), this.handle || (this.handle = requestAnimationFrame(this.tick));
    });
  }
  ensureRenderer() {
    if (this.renderer || this.failed) return this.renderer;
    try {
      this.canvas = document.createElement("canvas"), this.renderer = new vt(this.canvas);
    } catch {
      this.failed = !0;
    }
    return this.renderer;
  }
  tick = () => {
    this.handle = 0;
    const e = this.ensureRenderer();
    if (!e) {
      this.jobs.splice(0).forEach((n) => n.resolve());
      return;
    }
    const t = performance.now();
    for (; performance.now() - t < 10; ) {
      let n = this.current;
      if (!n || n.cancelled) {
        if (n = this.current = this.jobs.shift() ?? null, !n) break;
        if (n.cancelled) continue;
        const r = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(16, Math.round((n.target.clientWidth || n.target.width) * r)), o = Math.max(16, Math.round((n.target.clientHeight || n.target.height) * r));
        e.resize(a, o), e.sync(n.scene), e.reset(), n.target.width !== a && (n.target.width = a), n.target.height !== o && (n.target.height = o);
      }
      e.render(1);
      const i = e.samples >= n.samples;
      (i || e.samples % 8 === 0 || e.samples === 2) && this.blit(n), i && (n.resolve(), this.current = null);
    }
    (this.current || this.jobs.length > 0) && (this.handle = requestAnimationFrame(this.tick));
  };
  blit(e) {
    const t = e.target.getContext("2d");
    !t || !this.canvas || t.drawImage(this.canvas, 0, 0, e.target.width, e.target.height);
  }
}
let at = null;
function Ye(s, e, t = {}) {
  at ??= new bn();
  const n = gn(Je(s), t.shape ?? "sphere", t.background ?? "studio");
  return at.enqueue(e, n, t.samples ?? 64);
}
class xt extends dt {
  canvas;
  container;
  renderer = null;
  controls;
  lightFollow;
  resolutionScale;
  maxPassesPerFrame;
  paused = !1;
  /** Chooses which light follows the pointer. Defaults to the first enabled non-sun light. */
  lightFollowTarget = (e) => e.lights.find((t) => t.enabled && t.type !== "sun") ?? null;
  _scene;
  homeCamera;
  maxPixelRatio;
  tools = [];
  activeTool = null;
  pointers = /* @__PURE__ */ new Map();
  drag = null;
  pinch = null;
  frameHandle = 0;
  passes = 1;
  lastFrame = 0;
  frameTime = 16;
  gpuBehind = !1;
  rateStart = 0;
  rateSamples = 0;
  samplesPerSecond = 0;
  onScreen = !0;
  disposed = !1;
  lastPresented = { exposure: NaN, toneMapping: "" };
  resizeObserver;
  intersectionObserver;
  constructor(e, t = {}) {
    super(), this.container = e, this._scene = t.scene ? A(t.scene) : xe("studio"), this.homeCamera = structuredClone(this._scene.camera), this.controls = t.controls ?? !0, this.lightFollow = t.lightFollow ?? !1, this.resolutionScale = z(t.resolutionScale ?? 1, 0.25, 1), this.maxPassesPerFrame = Math.max(1, Math.round(t.maxPassesPerFrame ?? 8)), this.maxPixelRatio = t.maxPixelRatio ?? 2, this.canvas = document.createElement("canvas"), this.canvas.tabIndex = 0, this.canvas.setAttribute("aria-label", "Path traced scene. Drag to orbit, right drag to pan, scroll to zoom."), Object.assign(this.canvas.style, {
      display: "block",
      width: "100%",
      height: "100%",
      touchAction: "none",
      outline: "none",
      cursor: "grab"
    }), getComputedStyle(e).position === "static" && (e.style.position = "relative"), e.appendChild(this.canvas), this.canvas.addEventListener("webglcontextlost", this.onContextLost), this.canvas.addEventListener("webglcontextrestored", this.onContextRestored), this.createRenderer();
    const n = this.canvas;
    n.addEventListener("pointerdown", this.onPointerDown), n.addEventListener("pointermove", this.onPointerMove), n.addEventListener("pointerup", this.onPointerUp), n.addEventListener("pointercancel", this.onPointerUp), n.addEventListener("pointerleave", this.onPointerLeave), n.addEventListener("wheel", this.onWheel, { passive: !1 }), n.addEventListener("dblclick", this.onDoubleClick), n.addEventListener("keydown", this.onKeyDown), n.addEventListener("contextmenu", (i) => i.preventDefault()), this.resizeObserver = new ResizeObserver(() => this.fit()), this.resizeObserver.observe(e), this.intersectionObserver = t.pauseWhenHidden === !1 || typeof IntersectionObserver > "u" ? null : new IntersectionObserver((i) => {
      this.onScreen = i.some((r) => r.isIntersecting);
    }), this.intersectionObserver?.observe(this.canvas), this.fit(), this.frameHandle = requestAnimationFrame(this.frame);
  }
  /* --------------------------------------------------------------- scene */
  get scene() {
    return this._scene;
  }
  /**
   * Replaces the scene. By default its camera becomes the "home" camera used by
   * double click and the 0 key; pass `{ keepHome: true }` to keep the previous one.
   */
  setScene(e, t = {}) {
    this._scene = A(e), t.keepHome || (this.homeCamera = structuredClone(this._scene.camera)), this.renderer?.reset();
  }
  /** A deep copy of the current scene, safe to serialize or store. */
  getScene() {
    return gt(this._scene);
  }
  /** Restarts the accumulation. Changes are detected automatically, so this is rarely needed. */
  restart() {
    this.renderer?.reset();
  }
  resetCamera() {
    this._scene.camera = structuredClone(this.homeCamera), this.emit("change", { source: "camera" });
  }
  get samples() {
    return this.renderer?.samples ?? 0;
  }
  /* ----------------------------------------------------------- geometry */
  /** Size of the canvas in CSS pixels. */
  get size() {
    return { width: this.canvas.clientWidth || 1, height: this.canvas.clientHeight || 1 };
  }
  /** World ray through a point given in client (viewport) coordinates. */
  rayAt(e, t) {
    const n = this.canvas.getBoundingClientRect(), i = (e - n.left) / n.width * 2 - 1, r = 1 - (t - n.top) / n.height * 2;
    return Ft(this._scene.camera, i, r, n.width / n.height);
  }
  /** What is under a client point: an object, a light, or null. */
  pick(e, t) {
    return se(this._scene, this.rayAt(e, t), { handleRadius: this.handleRadius() });
  }
  /** Projects a world point to canvas CSS pixels. `visible` is false behind the camera. */
  project(e) {
    const { width: t, height: n } = this.size, i = Nt(this._scene.camera, e, t / n);
    return { x: (i.x + 1) / 2 * t, y: (1 - i.y) / 2 * n, depth: i.depth, visible: i.depth > 1e-3 };
  }
  /* ------------------------------------------------------------- output */
  /** PNG (or other type) of the current image. */
  toBlob(e = "image/png", t) {
    return this.renderer?.present(), new Promise(
      (n, i) => this.canvas.toBlob((r) => r ? n(r) : i(new Error("Snapshot failed")), e, t)
    );
  }
  /* -------------------------------------------------------------- tools */
  addTool(e) {
    return this.tools.push(e), () => {
      const t = this.tools.indexOf(e);
      t >= 0 && this.tools.splice(t, 1);
    };
  }
  dispose() {
    this.disposed = !0, cancelAnimationFrame(this.frameHandle), this.resizeObserver.disconnect(), this.intersectionObserver?.disconnect(), this.renderer?.dispose(), this.renderer = null, this.canvas.remove();
  }
  /* ----------------------------------------------------------- internals */
  createRenderer() {
    try {
      this.renderer = new vt(this.canvas);
    } catch (e) {
      this.renderer = null;
      const t = e instanceof U ? e.message : `Unexpected error: ${String(e)}`;
      queueMicrotask(() => this.emit("error", { message: t }));
    }
  }
  onContextLost = (e) => {
    e.preventDefault(), this.renderer = null, this.emit("error", { message: "The GPU context was lost. It will be restored automatically." });
  };
  onContextRestored = () => {
    this.createRenderer(), this.fit(!0);
  };
  /** Matches the drawing buffer to the element size. */
  fit(e = !1) {
    if (!this.renderer) return;
    const t = Math.min(window.devicePixelRatio || 1, this.maxPixelRatio) * this.resolutionScale, { width: n, height: i } = this.size;
    e && this.renderer.reset(), this.renderer.resize(n * t, i * t);
  }
  frame = (e) => {
    if (this.disposed) return;
    this.frameHandle = requestAnimationFrame(this.frame);
    const t = this.renderer;
    if (!t) return;
    const n = this.lastFrame ? e - this.lastFrame : 16;
    if (this.lastFrame = e, this.frameTime = this.frameTime * 0.8 + n * 0.2, this.paused || document.hidden || !this.onScreen) return;
    if (t.busy()) {
      this.passes = Math.max(1, this.passes - 1), this.gpuBehind = !0;
      return;
    }
    const i = t.sync(this._scene), r = this._scene.render.maxSamples;
    if (r > 0 && t.samples >= r) {
      (t.exposure !== this.lastPresented.exposure || t.toneMapping !== this.lastPresented.toneMapping) && (t.present(), this.lastPresented = { exposure: t.exposure, toneMapping: t.toneMapping });
      return;
    }
    i || t.samples < 4 ? this.passes = 1 : !this.gpuBehind && this.frameTime < 20 && this.passes < this.maxPassesPerFrame ? this.passes++ : this.frameTime > 30 && this.passes > 1 && this.passes--, this.gpuBehind = !1;
    const o = r > 0 ? Math.min(this.passes, r - t.samples) : this.passes;
    t.render(o), this.lastPresented = { exposure: t.exposure, toneMapping: t.toneMapping }, i && (this.rateStart = e, this.rateSamples = 0), this.rateSamples += o, e - this.rateStart > 500 && (this.samplesPerSecond = Math.round(this.rateSamples * 1e3 / (e - this.rateStart)), this.rateStart = e, this.rateSamples = 0), this.emit("frame", {
      samples: t.samples,
      samplesPerSecond: this.samplesPerSecond,
      converged: r > 0 && t.samples >= r,
      width: t.width,
      height: t.height
    });
  };
  /** About 10 CSS pixels, measured at the depth of the camera target. */
  handleRadius() {
    const e = this._scene.camera, { width: t, height: n } = this.size;
    return e.distance * Pe(Math.tan(e.fov * Math.PI / 360), t / n) * 2 * 10 / n;
  }
  /* ------------------------------------------------------------ pointer */
  onPointerDown = (e) => {
    if (this.canvas.focus({ preventScroll: !0 }), this.canvas.setPointerCapture(e.pointerId), this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }), this.pointers.size === 1) {
      for (let n = this.tools.length - 1; n >= 0; n--)
        if (this.tools[n].down?.(e)) {
          this.activeTool = this.tools[n];
          return;
        }
    }
    if (this.activeTool) return;
    if (e.pointerType === "touch") {
      if (this.pointers.size === 1 && this.lightFollow) {
        this.followPointer(e), this.drag = null;
        return;
      }
      this.pointers.size === 2 ? this.startPinch() : this.drag = { mode: "orbit", x: e.clientX, y: e.clientY, moved: 0 };
      return;
    }
    const t = e.button === 1 || e.button === 2 || e.shiftKey;
    this.drag = { mode: t ? "pan" : "orbit", x: e.clientX, y: e.clientY, moved: 0 }, this.canvas.style.cursor = "grabbing";
  };
  onPointerMove = (e) => {
    if (!this.pointers.has(e.pointerId)) {
      if (e.pointerType !== "mouse") return;
      for (let a = this.tools.length - 1; a >= 0; a--)
        if (this.tools[a].hover?.(e)) return;
      this.lightFollow && this.followPointer(e);
      return;
    }
    if (this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }), this.activeTool) {
      this.activeTool.move?.(e);
      return;
    }
    if (this.pinch && this.pointers.size >= 2) {
      this.updatePinch();
      return;
    }
    if (e.pointerType === "touch" && this.lightFollow && this.pointers.size === 1) {
      this.followPointer(e);
      return;
    }
    const t = this.drag;
    if (!t || !this.controls) return;
    const n = e.clientX - t.x, i = e.clientY - t.y;
    if (t.x = e.clientX, t.y = e.clientY, t.moved += Math.abs(n) + Math.abs(i), n === 0 && i === 0) return;
    const r = this._scene.camera;
    if (t.mode === "orbit") {
      const a = e.pointerType === "touch" ? 0.25 : 0.3;
      Q(r, -n * a, i * a);
    } else {
      const a = this.size.height;
      _t(r, n / a, i / a);
    }
    this.emit("change", { source: "camera" });
  };
  onPointerUp = (e) => {
    if (this.pointers.delete(e.pointerId), this.canvas.hasPointerCapture(e.pointerId) && this.canvas.releasePointerCapture(e.pointerId), this.activeTool) {
      this.activeTool.up?.(e), this.pointers.size === 0 && (this.activeTool = null);
      return;
    }
    this.pointers.size < 2 && (this.pinch = null), this.pointers.size === 0 && (this.drag && this.drag.moved < 4 && this.emit("tap", { clientX: e.clientX, clientY: e.clientY, button: e.button, altKey: e.altKey, shiftKey: e.shiftKey }), this.drag = null, this.canvas.style.cursor = "grab");
  };
  onPointerLeave = () => {
    for (const e of this.tools) e.leave?.();
  };
  startPinch() {
    const [e, t] = [...this.pointers.values()];
    this.pinch = { distance: Math.hypot(e.x - t.x, e.y - t.y), x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 }, this.drag = null;
  }
  updatePinch() {
    const e = this.pinch;
    if (!e || !this.controls) return;
    const [t, n] = [...this.pointers.values()], i = Math.hypot(t.x - n.x, t.y - n.y), r = (t.x + n.x) / 2, a = (t.y + n.y) / 2, o = this._scene.camera;
    i > 0 && e.distance > 0 && ke(o, e.distance / i), Q(o, -(r - e.x) * 0.25, (a - e.y) * 0.25), this.pinch = { distance: i, x: r, y: a }, this.emit("change", { source: "camera" });
  }
  onWheel = (e) => {
    if (!this.controls) return;
    e.preventDefault();
    const t = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    ke(this._scene.camera, Math.exp(z(t, -200, 200) * 1e-3)), this.emit("change", { source: "camera" });
  };
  onDoubleClick = () => {
    !this.controls || this.tools.length > 0 || this.resetCamera();
  };
  onKeyDown = (e) => {
    if (!this.controls || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = this._scene.camera, n = 4;
    switch (e.key) {
      case "ArrowLeft":
        Q(t, n, 0);
        break;
      case "ArrowRight":
        Q(t, -n, 0);
        break;
      case "ArrowUp":
        Q(t, 0, n);
        break;
      case "ArrowDown":
        Q(t, 0, -n);
        break;
      case "+":
      case "=":
        ke(t, 0.92);
        break;
      case "-":
        ke(t, 1.08);
        break;
      case "0":
        this.resetCamera(), e.preventDefault();
        return;
      default:
        return;
    }
    e.preventDefault(), this.emit("change", { source: "camera" });
  };
  /**
   * Moves the follow light to the point under the cursor, keeping its height: the light
   * ends up above whatever surface is under the pointer, clamped inside the scene bounds.
   */
  followPointer(e) {
    const t = this._scene, n = this.lightFollowTarget(t);
    if (!n || n.type === "sun") return;
    const i = this.rayAt(e.clientX, e.clientY), r = se(t, i, { lights: !1 });
    let a, o;
    if (r)
      [a, , o] = r.point;
    else {
      if (Math.abs(i.direction[1]) < 1e-6) return;
      const c = (n.position[1] - i.origin[1]) / i.direction[1];
      if (c <= 0) return;
      const d = b(i.origin, i.direction, c);
      a = d[0], o = d[2];
    }
    const l = Ht(t);
    if (l) {
      const c = n.type === "area" ? Math.max(n.size[0], n.size[1]) / 2 : n.type === "sphere" ? n.radius : 0, d = (u, p, g) => g - p > 2 * c ? z(u, p + c, g - c) : u;
      a = d(a, l.min[0], l.max[0]), o = d(o, l.min[2], l.max[2]);
    }
    Math.abs(n.position[0] - a) < 1e-4 && Math.abs(n.position[2] - o) < 1e-4 || (n.position = [a, n.position[1], o], this.emit("change", { source: "light" }));
  }
}
function h(s, e = {}, ...t) {
  const n = document.createElement(s);
  for (const [i, r] of Object.entries(e))
    r == null || r === !1 || (i.startsWith("on") && typeof r == "function" ? n.addEventListener(i.slice(2).toLowerCase(), r) : i === "class" ? n.className = String(r) : r === !0 ? n.setAttribute(i, "") : n.setAttribute(i, String(r)));
  for (const i of t)
    i == null || i === !1 || n.append(i);
  return n;
}
const lt = {
  sphere: '<circle cx="8" cy="8" r="5.5"/><path d="M2.5 8c0 1.6 2.5 2.8 5.5 2.8s5.5-1.2 5.5-2.8"/>',
  box: '<path d="M8 2.2 13.3 5v6L8 13.8 2.7 11V5z"/><path d="M2.7 5 8 7.8 13.3 5M8 7.8v6"/>',
  cylinder: '<ellipse cx="8" cy="4" rx="4.8" ry="1.8"/><path d="M3.2 4v8c0 1 2.1 1.8 4.8 1.8s4.8-.8 4.8-1.8V4"/>',
  cone: '<path d="M8 2.2 3.2 12c0 1 2.1 1.8 4.8 1.8s4.8-.8 4.8-1.8z"/>',
  plane: '<path d="M1.8 10.5 5.5 5.5h8.7l-3.7 5z"/>',
  disk: '<ellipse cx="8" cy="9" rx="6" ry="3"/>',
  area: '<path d="M3 4.5h10v3H3z"/><path d="M5 9.5 4 12M8 9.5V12.5M11 9.5l1 2.5"/>',
  "light-sphere": '<circle cx="8" cy="7" r="3.2"/><path d="M8 1.5v1M2.5 7h1M12.5 7h1M4 3l.8.8M12 3l-.8.8M6.5 12.5h3M7 14.3h2"/>',
  point: '<circle cx="8" cy="8" r="1.8"/><path d="M8 2v2M8 12v2M2 8h2M12 8h2M3.8 3.8l1.4 1.4M10.8 10.8l1.4 1.4M3.8 12.2l1.4-1.4M10.8 5.2l1.4-1.4"/>',
  sun: '<circle cx="8" cy="8" r="2.8"/><path d="M8 1.3v1.6M8 13.1v1.6M1.3 8h1.6M13.1 8h1.6M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M3.3 12.7l1.1-1.1M11.6 4.4l1.1-1.1"/>',
  eye: '<path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8 12.1 12.5 8 12.5 1.5 8 1.5 8z"/><circle cx="8" cy="8" r="1.9"/>',
  "eye-off": '<path d="M2 2l12 12M6.4 3.8A6.7 6.7 0 0 1 8 3.5c4.1 0 6.5 4.5 6.5 4.5a11 11 0 0 1-1.8 2.4M4.2 5.1A11 11 0 0 0 1.5 8s2.4 4.5 6.5 4.5a6.5 6.5 0 0 0 3.2-.8"/>',
  trash: '<path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9.5h6.6L12 4"/>',
  copy: '<rect x="5" y="5" width="8.5" height="8.5" rx="1"/><path d="M3 10.5V3a.5.5 0 0 1 .5-.5H11"/>',
  undo: '<path d="M5.5 3 2.5 6l3 3"/><path d="M2.5 6h7a4 4 0 0 1 0 8H7"/>',
  redo: '<path d="M10.5 3l3 3-3 3"/><path d="M13.5 6h-7a4 4 0 0 0 0 8H9"/>',
  move: '<path d="M8 1.5v13M1.5 8h13M8 1.5 6 3.5M8 1.5l2 2M8 14.5l-2-2M8 14.5l2-2M1.5 8l2-2M1.5 8l2 2M14.5 8l-2-2M14.5 8l-2 2"/>',
  rotate: '<path d="M13.2 8.5A5.2 5.2 0 1 1 11.6 4"/><path d="M12.5 1.5v3h-3"/>',
  scale: '<path d="M2.5 13.5h6v-6h-6zM8.5 7.5l5-5M9.5 2.5h4v4"/>',
  plus: '<path d="M8 3v10M3 8h10"/>',
  share: '<circle cx="12" cy="3.5" r="1.8"/><circle cx="4" cy="8" r="1.8"/><circle cx="12" cy="12.5" r="1.8"/><path d="M5.6 7.1l4.8-2.7M5.6 8.9l4.8 2.7"/>',
  code: '<path d="M5.5 4 1.5 8l4 4M10.5 4l4 4-4 4"/>',
  download: '<path d="M8 2v8.5M4.5 7 8 10.5 11.5 7M2.5 13.5h11"/>',
  upload: '<path d="M8 10.5V2M4.5 5.5 8 2l3.5 3.5M2.5 13.5h11"/>',
  camera: '<path d="M2 5h2.5l1.2-1.8h4.6L11.5 5H14v8H2z"/><circle cx="8" cy="9" r="2.5"/>',
  pause: '<path d="M5 3v10M11 3v10"/>',
  play: '<path d="M4.5 2.8v10.4L13 8z"/>',
  follow: '<path d="M3 2.5l4.2 10.5 1.5-4.3 4.3-1.5z"/><path d="M11.5 11.5l2.5 2.5"/>',
  panel: '<rect x="2" y="2.5" width="12" height="11" rx="1"/><path d="M6 2.5v11"/>',
  "panel-right": '<rect x="2" y="2.5" width="12" height="11" rx="1"/><path d="M10 2.5v11"/>',
  scene: '<path d="M2 12.5 6 6l3 4 2-2.5 3 5z"/><circle cx="11" cy="4" r="1.5"/>',
  material: '<circle cx="8" cy="8" r="5.5"/><path d="M5.2 5.5a3.5 3.5 0 0 1 3-1.6"/>',
  close: '<path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/>',
  focus: '<path d="M2 5.5V2h3.5M10.5 2H14v3.5M14 10.5V14h-3.5M5.5 14H2v-3.5"/><circle cx="8" cy="8" r="2"/>',
  chevron: '<path d="M4.5 6.5 8 10l3.5-3.5"/>'
};
function P(s, e) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return n.setAttribute("viewBox", "0 0 16 16"), n.setAttribute("class", "pt-icon"), n.setAttribute("aria-hidden", "true"), n.innerHTML = lt[s] ?? lt.box, n;
}
function M(s, e, t, n = "") {
  const i = h("button", { type: "button", class: `pt-icon-btn ${n}`.trim(), title: e, "aria-label": e }, P(s));
  return i.addEventListener("click", t), i;
}
function Ce(s) {
  return s.getRootNode().activeElement === s;
}
function yt(s, e, t, n = {}) {
  const { min: i = -1 / 0, max: r = 1 / 0, step: a = 0.01, precision: o = 3, slider: l = !1, suffix: c = "" } = n, d = h("input", { type: "text", inputmode: "decimal", class: l ? "pt-num pt-slider" : "pt-num", spellcheck: "false", autocomplete: "off" }), u = (f) => `${Number(f.toFixed(o))}${c}`, p = (f) => {
    Number.isFinite(f) && (e(z(f, i, r)), t.onInput(), g());
  }, g = () => {
    const f = s();
    if (Ce(d) || (d.value = u(f)), l && Number.isFinite(i) && Number.isFinite(r)) {
      const S = z((f - i) / (r - i), 0, 1);
      d.style.setProperty("--fill", `${(S * 100).toFixed(2)}%`);
    }
  };
  let m = null;
  d.addEventListener("pointerdown", (f) => {
    Ce(d) || f.button === 0 && (f.preventDefault(), d.setPointerCapture(f.pointerId), m = { x: f.clientX, value: s(), moved: !1, id: f.pointerId });
  }), d.addEventListener("pointermove", (f) => {
    if (!m || f.pointerId !== m.id) return;
    const S = f.clientX - m.x;
    if (!(!m.moved && Math.abs(S) < 3))
      if (m.moved = !0, d.classList.add("pt-scrubbing"), l && Number.isFinite(i) && Number.isFinite(r)) {
        const F = d.getBoundingClientRect(), W = z((f.clientX - F.left) / F.width, 0, 1);
        p(Math.round((i + W * (r - i)) / a) * a);
      } else {
        const F = f.shiftKey ? 0.1 : 1;
        p(Math.round((m.value + S * a * F) / (a * F)) * (a * F));
      }
  });
  const w = (f) => {
    if (!m || f.pointerId !== m.id) return;
    const S = m.moved;
    m = null, d.classList.remove("pt-scrubbing"), S ? t.onCommit() : (d.focus(), d.select());
  };
  d.addEventListener("pointerup", w), d.addEventListener("pointercancel", w);
  const C = () => {
    const f = d.value.replace(c, "").replace(",", ".").trim(), S = f === "" ? NaN : Number(f);
    Number.isFinite(S) && S !== s() && (p(S), t.onCommit()), g();
  };
  return d.addEventListener("keydown", (f) => {
    if (f.stopPropagation(), f.key === "Enter")
      C(), d.blur();
    else if (f.key === "Escape")
      g(), d.blur();
    else if (f.key === "ArrowUp" || f.key === "ArrowDown") {
      f.preventDefault();
      const S = (f.key === "ArrowUp" ? 1 : -1) * a * (f.shiftKey ? 10 : 1);
      p(s() + S), t.onCommit();
    }
  }), d.addEventListener("blur", () => {
    C(), g();
  }), g(), { el: d, refresh: g };
}
function ae(s, e, t) {
  return h("div", { class: "pt-row", title: t }, h("label", { class: "pt-label" }, s), e);
}
function k(s, e, t, n, i = {}) {
  const r = yt(e, t, n, i);
  return { el: ae(s, r.el), refresh: r.refresh };
}
function pe(s, e, t, n, i = {}) {
  const r = [0, 1, 2].map(
    (l) => yt(
      () => e()[l],
      (c) => {
        const d = [...e()];
        d[l] = c, t(d);
      },
      n,
      i
    )
  ), a = ["x", "y", "z"], o = h("div", { class: "pt-vec3" }, ...r.map((l, c) => h("span", { class: `pt-axis pt-axis-${a[c]}` }, l.el)));
  return { el: ae(s, o), refresh: () => r.forEach((l) => l.refresh()) };
}
function G(s, e, t, n) {
  const i = h("input", { type: "color", class: "pt-color" }), r = h("input", { type: "text", class: "pt-hex", spellcheck: "false", maxlength: 7 });
  i.addEventListener("input", () => {
    t(i.value), r.value = i.value, n.onInput();
  }), i.addEventListener("change", () => n.onCommit());
  const a = () => {
    const l = r.value.trim(), c = /^#?[0-9a-f]{6}$/i.test(l) ? `#${l.replace("#", "").toLowerCase()}` : null;
    c && c !== e() && (t(c), n.onInput(), n.onCommit()), o();
  };
  r.addEventListener("keydown", (l) => {
    l.stopPropagation(), l.key === "Enter" && r.blur();
  }), r.addEventListener("blur", a);
  const o = () => {
    const l = e();
    i.value = l, Ce(r) || (r.value = l);
  };
  return o(), { el: ae(s, h("div", { class: "pt-color-field" }, i, r)), refresh: o };
}
function te(s, e, t, n, i) {
  const r = h("select", { class: "pt-select" }, ...e.map((o) => h("option", { value: o.value }, o.label)));
  r.addEventListener("change", () => {
    n(r.value), i.onInput(), i.onCommit();
  });
  const a = () => {
    r.value = t();
  };
  return a(), { el: ae(s, r), refresh: a };
}
function je(s, e, t, n) {
  const i = h("input", { type: "checkbox", class: "pt-switch" });
  i.addEventListener("change", () => {
    t(i.checked), n.onInput(), n.onCommit();
  });
  const r = () => {
    i.checked = e();
  };
  return r(), { el: ae(s, i), refresh: r };
}
function ue(s, e, t, n) {
  const i = h("input", { type: "text", class: "pt-text", spellcheck: "false" });
  i.addEventListener("keydown", (a) => {
    a.stopPropagation(), a.key === "Enter" && i.blur();
  }), i.addEventListener("blur", () => {
    const a = i.value.trim();
    a && a !== e() && (t(a), n.onInput(), n.onCommit()), r();
  });
  const r = () => {
    Ce(i) || (i.value = e());
  };
  return r(), { el: ae(s, i), refresh: r };
}
function I(s, ...e) {
  return h("details", { class: "pt-section", open: !0 }, h("summary", {}, P("chevron"), h("span", {}, s)), ...e);
}
const De = ["#ef5b4f", "#7cc85a", "#4f93ef"], fe = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];
function ct(s, e, t, n, i, r) {
  const a = i - t, o = r - n, l = a * a + o * o, c = l > 0 ? Math.max(0, Math.min(1, ((s - t) * a + (e - n) * o) / l)) : 0;
  return Math.hypot(s - (t + a * c), e - (n + o * c));
}
function He(s, e) {
  return Math.round(s / e) * e;
}
class vn {
  constructor(e, t) {
    this.viewer = e, this.host = t, this.canvas = document.createElement("canvas"), this.canvas.className = "pt-overlay", e.container.appendChild(this.canvas);
  }
  viewer;
  host;
  canvas;
  mode = "translate";
  /** Hide the overlay entirely (e.g. for clean screenshots). */
  hidden = !1;
  drag = null;
  hovered = null;
  accent = "#ffb547";
  get scene() {
    return this.viewer.scene;
  }
  selection() {
    return j(this.scene, this.host.selectedId());
  }
  /** On-screen length of the gizmo arms, in world units at the selection's depth. */
  gizmoLength(e) {
    const t = B(this.scene.camera), n = Math.max(T(_(e, t.position), t.forward), 0.05), { width: i, height: r } = this.viewer.size;
    return n * Pe(t.tanHalfFov, i / r) * 2 * 70 / r;
  }
  /** Axes for the current mode: world axes for translate and rotate, local axes for scale. */
  axes(e) {
    if (this.mode !== "scale") return fe;
    const t = ne(e.item.rotation);
    return fe.map((n) => ie(t, n));
  }
  supports(e, t) {
    if (t.kind === "body") return e.kind === "object" || e.item.type !== "sun";
    if (this.mode === "translate" || e.kind === "object") return !0;
    const n = e.item;
    return this.mode === "rotate" ? n.type === "area" || n.type === "sun" : n.type === "area" ? t.kind === "center" || t.kind === "axis" && t.axis !== 1 : n.type === "sphere" && t.kind === "center";
  }
  /* -------------------------------------------------------------- picking */
  hitHandle(e, t) {
    const n = this.selection();
    if (!n) return null;
    const i = this.viewer.canvas.getBoundingClientRect(), r = e - i.left, a = t - i.top, o = n.item.position, l = this.viewer.project(o);
    if (!l.visible) return null;
    const c = this.gizmoLength(o);
    let d = null;
    const u = (p, g) => {
      g < 9 && this.supports(n, p) && (!d || g < d.d) && (d = { handle: p, d: g });
    };
    if (this.mode === "rotate")
      for (const p of [0, 1, 2]) {
        const g = this.ringPoints(o, fe[p], c);
        for (let m = 0; m < g.length - 1; m++)
          !g[m].visible || !g[m + 1].visible || u({ kind: "ring", axis: p }, ct(r, a, g[m].x, g[m].y, g[m + 1].x, g[m + 1].y));
      }
    else {
      const p = this.axes(n);
      for (const g of [0, 1, 2]) {
        const m = this.viewer.project(b(o, p[g], c));
        m.visible && u({ kind: "axis", axis: g }, ct(r, a, l.x, l.y, m.x, m.y));
      }
    }
    return Math.abs(r - l.x) < 8 && Math.abs(a - l.y) < 8 && u({ kind: "center" }, 0), d ? d.handle : null;
  }
  ringPoints(e, t, n) {
    const i = Math.abs(t[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0], r = H([t[1] * i[2] - t[2] * i[1], t[2] * i[0] - t[0] * i[2], t[0] * i[1] - t[1] * i[0]]), a = [t[1] * r[2] - t[2] * r[1], t[2] * r[0] - t[0] * r[2], t[0] * r[1] - t[1] * r[0]], o = [];
    for (let l = 0; l <= 64; l++) {
      const c = l / 64 * Math.PI * 2;
      o.push(this.viewer.project(L(e, L(R(r, Math.cos(c) * n), R(a, Math.sin(c) * n)))));
    }
    return o;
  }
  /** Parameter along the line origin + axis * t closest to the pointer ray. */
  axisParam(e, t, n, i) {
    const r = this.viewer.rayAt(n, i), a = _(e, r.origin), o = T(t, r.direction), l = 1 - o * o;
    return l < 1e-4 ? null : (o * T(r.direction, a) - T(t, a)) / l;
  }
  planePoint(e, t, n, i) {
    const r = this.viewer.rayAt(n, i), a = T(r.direction, t);
    if (Math.abs(a) < 1e-5) return null;
    const o = T(_(e, r.origin), t) / a;
    return o <= 0 ? null : b(r.origin, r.direction, o);
  }
  /* -------------------------------------------------------------- input */
  down(e) {
    if (e.button !== 0 || this.hidden) return !1;
    const t = this.selection();
    if (!t) return !1;
    let n = this.hitHandle(e.clientX, e.clientY), i = null;
    if (!n) {
      const u = this.viewer.pick(e.clientX, e.clientY);
      if (!u || u.id !== t.item.id || !this.supports(t, { kind: "body" })) return !1;
      n = { kind: "body" }, i = u.point;
    }
    const r = t.item.position, a = B(this.scene.camera), o = this.gizmoLength(r), l = this.axes(t), c = t.kind === "light" ? t.item : null, d = {
      handle: n,
      item: t,
      startClient: [e.clientX, e.clientY],
      startPosition: [...r],
      startRotation: [...t.item.rotation],
      startScale: t.kind === "object" ? [...t.item.scale] : [1, 1, 1],
      startSize: c ? [...c.size] : [1, 1],
      startRadius: c ? c.radius : 1,
      startParam: 0,
      startPoint: i ?? [...r],
      planeNormal: a.forward,
      axisDir: [1, 0, 0],
      length: o,
      moved: !1
    };
    if (n.kind === "axis") {
      d.axisDir = l[n.axis];
      const u = this.axisParam(r, d.axisDir, e.clientX, e.clientY);
      if (u === null) return !1;
      d.startParam = u;
    } else if (n.kind === "center" && this.mode === "translate") {
      const u = this.planePoint(r, a.forward, e.clientX, e.clientY);
      if (!u) return !1;
      d.startPoint = u;
    } else n.kind === "body" && (d.planeNormal = e.shiftKey ? H([a.forward[0], 0, a.forward[2]]) : [0, 1, 0]);
    return this.drag = d, this.viewer.canvas.style.cursor = "grabbing", !0;
  }
  move(e) {
    const t = this.drag;
    if (!t || !t.moved && Math.hypot(e.clientX - t.startClient[0], e.clientY - t.startClient[1]) < 3) return;
    t.moved = !0;
    const n = e.ctrlKey || e.metaKey, i = t.item.item, r = t.item.kind === "light" ? t.item.item : null;
    if (this.mode === "rotate" && t.handle.kind === "ring") {
      const a = this.viewer.project(t.startPosition), o = this.viewer.canvas.getBoundingClientRect(), l = Math.atan2(t.startClient[1] - o.top - a.y, t.startClient[0] - o.left - a.x), c = Math.atan2(e.clientY - o.top - a.y, e.clientX - o.left - a.x), d = fe[t.handle.axis], u = T(d, B(this.scene.camera).forward) < 0;
      let p = (c - l) * (u ? -1 : 1);
      n && (p = He(p, Math.PI / 12));
      const g = Tt(St(d, p), ne(t.startRotation));
      i.rotation = kt(g).map((m) => Math.round(m * 1e3) / 1e3);
    } else if (this.mode === "scale" && t.handle.kind !== "body") {
      let a;
      if (t.handle.kind === "axis") {
        const l = this.axisParam(t.startPosition, t.axisDir, e.clientX, e.clientY);
        if (l === null) return;
        a = 1 + (l - t.startParam) / t.length;
      } else
        a = Math.exp((e.clientX - t.startClient[0] - (e.clientY - t.startClient[1])) / 120);
      a = Math.max(0.01, a);
      const o = (l) => n ? Math.max(0.05, He(l, 0.05)) : Math.max(1e-3, Math.round(l * 1e4) / 1e4);
      if (t.item.kind === "object") {
        const l = [...t.startScale];
        if (t.handle.kind === "axis") l[t.handle.axis] = o(l[t.handle.axis] * a);
        else for (let c = 0; c < 3; c++) l[c] = o(l[c] * a);
        t.item.item.scale = l;
      } else if (r?.type === "area") {
        const l = [...t.startSize];
        if (t.handle.kind === "axis") {
          const c = t.handle.axis === 0 ? 0 : 1;
          l[c] = o(l[c] * a);
        } else
          l[0] = o(l[0] * a), l[1] = o(l[1] * a);
        r.size = l;
      } else r?.type === "sphere" && (r.radius = o(t.startRadius * a));
    } else {
      let a = null;
      if (t.handle.kind === "axis") {
        const l = this.axisParam(t.startPosition, t.axisDir, e.clientX, e.clientY);
        if (l === null) return;
        a = R(t.axisDir, l - t.startParam);
      } else {
        const l = t.planeNormal, c = this.planePoint(t.startPoint, l, e.clientX, e.clientY);
        if (!c) return;
        a = _(c, t.startPoint), t.handle.kind === "body" && l[1] === 0 && (a = [0, a[1], 0]);
      }
      let o = L(t.startPosition, a);
      n && (o = o.map((l) => He(l, 0.1))), i.position = o.map((l) => Math.round(l * 1e4) / 1e4);
    }
    this.host.changed();
  }
  up() {
    const e = this.drag;
    this.drag = null, this.viewer.canvas.style.cursor = "grab", e?.moved && this.host.commit();
  }
  hover(e) {
    const t = this.hidden ? null : this.hitHandle(e.clientX, e.clientY);
    return this.hovered = t, this.viewer.canvas.style.cursor = t ? "pointer" : "grab", t !== null;
  }
  leave() {
    this.hovered = null;
  }
  /** Selects what is under a click (or clears the selection). */
  tap(e, t) {
    const n = this.viewer.pick(e, t);
    this.host.select(n ? n.id : null);
  }
  /* -------------------------------------------------------------- drawing */
  draw() {
    const { width: e, height: t } = this.viewer.size, n = Math.min(window.devicePixelRatio || 1, 2), i = Math.round(e * n), r = Math.round(t * n);
    (this.canvas.width !== i || this.canvas.height !== r) && (this.canvas.width = i, this.canvas.height = r);
    const a = this.canvas.getContext("2d");
    if (!a || (a.setTransform(n, 0, 0, n, 0, 0), a.clearRect(0, 0, e, t), this.hidden)) return;
    this.accent = getComputedStyle(this.canvas).getPropertyValue("--accent").trim() || this.accent;
    const o = this.host.selectedId();
    for (const c of this.scene.lights) this.drawLight(a, c, c.id === o);
    const l = this.selection();
    l && (l.kind === "object" && this.drawOutline(a, Ot(l.item)), this.drawGizmo(a, l));
  }
  line(e, t, n) {
    const i = this.viewer.project(t), r = this.viewer.project(n);
    !i.visible || !r.visible || (e.moveTo(i.x, i.y), e.lineTo(r.x, r.y));
  }
  drawOutline(e, t) {
    const n = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
    e.beginPath();
    for (const [i, r] of n) this.line(e, t[i], t[r]);
    e.strokeStyle = this.accent, e.globalAlpha = 0.9, e.lineWidth = 1, e.stroke(), e.globalAlpha = 1;
  }
  drawLight(e, t, n) {
    const i = this.viewer.project(t.position);
    if (i.visible) {
      if (e.save(), e.strokeStyle = n ? this.accent : "rgba(255, 220, 160, 0.75)", e.fillStyle = e.strokeStyle, e.lineWidth = n ? 1.5 : 1, e.globalAlpha = t.enabled ? 1 : 0.4, e.beginPath(), t.type === "area") {
        const r = Ut(t);
        for (let o = 0; o < 4; o++) this.line(e, r[o], r[(o + 1) % 4]);
        const { normal: a } = Ae(t);
        this.line(e, t.position, b(t.position, a, this.gizmoLength(t.position) * 0.6));
      } else if (t.type === "sun") {
        const r = ie(ne(t.rotation), [0, -1, 0]);
        this.line(e, t.position, b(t.position, r, this.gizmoLength(t.position) * 1.2));
      } else if (t.type === "sphere") {
        const r = this.viewer.project(b(t.position, B(this.scene.camera).up, t.radius));
        e.arc(i.x, i.y, Math.max(3, Math.hypot(r.x - i.x, r.y - i.y)), 0, Math.PI * 2);
      }
      if (e.stroke(), e.beginPath(), e.arc(i.x, i.y, 4, 0, Math.PI * 2), e.fill(), t.type === "point" || t.type === "sun") {
        e.beginPath();
        for (let r = 0; r < 8; r++) {
          const a = r / 8 * Math.PI * 2;
          e.moveTo(i.x + Math.cos(a) * 7, i.y + Math.sin(a) * 7), e.lineTo(i.x + Math.cos(a) * 10, i.y + Math.sin(a) * 10);
        }
        e.stroke();
      }
      e.restore();
    }
  }
  drawGizmo(e, t) {
    const n = t.item.position, i = this.viewer.project(n);
    if (!i.visible) return;
    const r = this.gizmoLength(n), a = this.drag?.handle ?? this.hovered, o = (l) => !!a && a.kind === l.kind && ("axis" in a ? a.axis : -1) === ("axis" in l ? l.axis : -1);
    if (e.save(), e.lineCap = "round", this.mode === "rotate")
      for (const l of [0, 1, 2]) {
        const c = { kind: "ring", axis: l };
        if (!this.supports(t, c)) continue;
        const d = this.ringPoints(n, fe[l], r);
        e.beginPath(), d.forEach((u, p) => p === 0 || !d[p - 1].visible ? e.moveTo(u.x, u.y) : e.lineTo(u.x, u.y)), e.strokeStyle = De[l], e.lineWidth = o(c) ? 3 : 1.75, e.stroke();
      }
    else {
      const l = this.axes(t);
      for (const c of [0, 1, 2]) {
        const d = { kind: "axis", axis: c };
        if (!this.supports(t, d)) continue;
        const u = this.viewer.project(b(n, l[c], r));
        if (!u.visible) continue;
        e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(u.x, u.y), e.strokeStyle = De[c], e.fillStyle = De[c], e.lineWidth = o(d) ? 3.5 : 2, e.stroke();
        const p = u.x - i.x, g = u.y - i.y, m = Math.hypot(p, g) || 1, w = p / m, C = g / m;
        e.beginPath(), this.mode === "translate" ? (e.moveTo(u.x + w * 9, u.y + C * 9), e.lineTo(u.x - C * 4.5, u.y + w * 4.5), e.lineTo(u.x + C * 4.5, u.y - w * 4.5), e.closePath()) : e.rect(u.x - 4, u.y - 4, 8, 8), e.fill();
      }
    }
    this.supports(t, { kind: "center" }) && (e.beginPath(), e.rect(i.x - 5, i.y - 5, 10, 10), e.fillStyle = o({ kind: "center" }) ? this.accent : "rgba(255, 255, 255, 0.85)", e.strokeStyle = "rgba(0, 0, 0, 0.6)", e.lineWidth = 1, e.fill(), e.stroke()), e.restore();
  }
  /** Raycast helper for drag and drop: id of the object under a client point. */
  objectAt(e, t) {
    return se(this.scene, this.viewer.rayAt(e, t), { lights: !1 })?.id ?? null;
  }
}
class xn {
  constructor(e, t = 200) {
    this.limit = t, this.present = e;
  }
  limit;
  past = [];
  future = [];
  present;
  /** Records a new state. Returns false when nothing changed. */
  push(e) {
    return e === this.present ? !1 : (this.past.push(this.present), this.past.length > this.limit && this.past.shift(), this.present = e, this.future.length = 0, !0);
  }
  /** Replaces the current state without creating an undo step (e.g. after loading a scene). */
  reset(e) {
    this.past.length = 0, this.future.length = 0, this.present = e;
  }
  undo() {
    const e = this.past.pop();
    return e === void 0 ? null : (this.future.push(this.present), this.present = e, e);
  }
  redo() {
    const e = this.future.pop();
    return e === void 0 ? null : (this.past.push(this.present), this.present = e, e);
  }
  get canUndo() {
    return this.past.length > 0;
  }
  get canRedo() {
    return this.future.length > 0;
  }
}
const yn = ':host{--bg: var(--pt-bg, #0e0f11);--panel: var(--pt-panel, #15161a);--panel-2: var(--pt-panel-2, #1b1d21);--field: var(--pt-field, #222429);--field-hover: var(--pt-field-hover, #2a2d33);--line: var(--pt-line, #2a2d33);--text: var(--pt-text, #e7e8eb);--muted: var(--pt-muted, #8b909a);--accent: var(--pt-accent, #ffb547);--accent-ink: var(--pt-accent-ink, #1d1305);--danger: var(--pt-danger, #ef5b4f);--x: #ef5b4f;--y: #7cc85a;--z: #4f93ef;--radius: 5px;all:initial;display:block;width:100%;height:100%;color:var(--text);font:12px/1.4 var(--pt-font, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif);-webkit-font-smoothing:antialiased}*{box-sizing:border-box}button,input,select,textarea{font:inherit;color:inherit}::selection{background:color-mix(in srgb,var(--accent) 40%,transparent)}.pt-icon{width:16px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}.pt-editor{position:relative;display:grid;grid-template-rows:44px minmax(0,1fr);width:100%;height:100%;background:var(--bg);overflow:hidden;container:pt-editor / inline-size}.pt-toolbar{display:flex;align-items:center;gap:4px;padding:0 8px;background:var(--panel);border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.pt-toolbar::-webkit-scrollbar{display:none}.pt-brand{display:flex;align-items:center;gap:8px;padding:0 8px 0 4px;font-weight:600;letter-spacing:.01em;white-space:nowrap}.pt-brand-mark{width:14px;height:14px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff6e0,var(--accent) 45%,#6b3d00 100%);box-shadow:0 0 12px color-mix(in srgb,var(--accent) 45%,transparent)}.pt-sep{width:1px;height:20px;margin:0 4px;background:var(--line);flex:none}.pt-spacer{flex:1;min-width:8px}.pt-icon-btn,.pt-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:28px;min-width:28px;padding:0 6px;border:1px solid transparent;border-radius:var(--radius);background:transparent;color:var(--text);cursor:pointer;white-space:nowrap;flex:none}.pt-btn{padding:0 10px;background:var(--field);border-color:var(--line)}.pt-icon-btn:hover,.pt-btn:hover{background:var(--field-hover)}.pt-icon-btn:disabled{opacity:.35;cursor:default;background:transparent}.pt-icon-btn.pt-active,.pt-btn.pt-active{background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--accent);border-color:color-mix(in srgb,var(--accent) 35%,transparent)}.pt-btn.pt-primary{background:var(--accent);color:var(--accent-ink);border-color:var(--accent);font-weight:600}.pt-btn.pt-primary:hover{filter:brightness(1.08)}.pt-icon-btn:focus-visible,.pt-btn:focus-visible,.pt-select:focus-visible,.pt-text:focus-visible,.pt-num:focus-visible,.pt-hex:focus-visible,.pt-switch:focus-visible,.pt-swatch:focus-visible,.pt-tree-row:focus-visible{outline:2px solid var(--accent);outline-offset:1px}.pt-label-btn{font-size:12px}.pt-group{display:inline-flex;gap:2px;padding:2px;border-radius:calc(var(--radius) + 2px);background:var(--panel-2);flex:none}.pt-body{display:grid;grid-template-columns:248px minmax(0,1fr) 296px;min-height:0}.pt-editor.pt-no-left .pt-body{grid-template-columns:0 minmax(0,1fr) 296px}.pt-editor.pt-no-right .pt-body{grid-template-columns:248px minmax(0,1fr) 0}.pt-editor.pt-no-left.pt-no-right .pt-body{grid-template-columns:0 minmax(0,1fr) 0}.pt-editor.pt-no-left .pt-left,.pt-editor.pt-no-right .pt-right{display:none}.pt-left{grid-column:1;grid-row:1}.pt-viewport{grid-column:2;grid-row:1}.pt-right{grid-column:3;grid-row:1}.pt-left,.pt-right{display:flex;flex-direction:column;min-height:0;background:var(--panel);overflow:hidden}.pt-left{border-right:1px solid var(--line)}.pt-right{border-left:1px solid var(--line);overflow-y:auto;scrollbar-width:thin}.pt-panel{display:flex;flex-direction:column;min-height:0}.pt-panel+.pt-panel{border-top:1px solid var(--line)}.pt-outliner,.pt-library{flex:1 1 50%}.pt-panel-head{display:flex;align-items:center;gap:4px;height:34px;padding:0 6px 0 12px;color:var(--muted);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;flex:none}.pt-panel-head span{flex:1}.pt-panel-head .pt-icon-btn{height:24px;min-width:24px;color:var(--muted)}.pt-panel-head .pt-icon-btn:hover{color:var(--text)}.pt-scroll{flex:1;min-height:0;overflow-y:auto;scrollbar-width:thin;padding:0 6px 8px}.pt-tree-group{padding:6px 6px 2px;color:var(--muted);font-size:11px}.pt-tree-row{display:flex;align-items:center;gap:8px;height:28px;padding:0 4px 0 8px;border-radius:var(--radius);cursor:pointer;user-select:none}.pt-tree-row:hover{background:var(--panel-2)}.pt-tree-row.pt-selected{background:color-mix(in srgb,var(--accent) 16%,transparent);color:var(--accent)}.pt-tree-row.pt-dim .pt-tree-name{opacity:.45}.pt-tree-row .pt-icon{color:var(--muted)}.pt-tree-row.pt-selected .pt-icon{color:var(--accent)}.pt-tree-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pt-tree-row .pt-icon-btn{height:22px;min-width:22px;padding:0 3px;color:var(--muted);opacity:0}.pt-tree-row:hover .pt-icon-btn,.pt-tree-row .pt-icon-btn.pt-off,.pt-tree-row .pt-icon-btn:focus-visible{opacity:1}.pt-tree-row .pt-icon-btn:hover{color:var(--text);background:var(--field)}.pt-rename{flex:1;min-width:0;height:22px;padding:0 6px;border:1px solid var(--accent);border-radius:4px;background:var(--field);outline:none}.pt-swatches{display:grid;grid-template-columns:repeat(auto-fill,minmax(66px,1fr));gap:6px;padding:2px 6px 10px}.pt-swatch{display:flex;flex-direction:column;gap:4px;padding:4px;border:1px solid transparent;border-radius:calc(var(--radius) + 1px);background:transparent;cursor:pointer;text-align:left}.pt-swatch:hover{background:var(--panel-2)}.pt-swatch.pt-selected{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 10%,transparent)}.pt-swatch.pt-used:not(.pt-selected){border-color:color-mix(in srgb,var(--accent) 45%,transparent)}.pt-swatch canvas{width:100%;aspect-ratio:1;border-radius:4px;background:var(--field);display:block}.pt-swatch span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;color:var(--muted)}.pt-swatch.pt-selected span{color:var(--text)}.pt-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:#000}.pt-view{position:absolute;inset:0}.pt-overlay{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}.pt-viewport.pt-drop-target{box-shadow:inset 0 0 0 2px var(--accent)}.pt-status{position:absolute;left:10px;right:10px;bottom:10px;display:flex;align-items:center;gap:14px;padding:4px 4px 4px 12px;border:1px solid color-mix(in srgb,var(--line) 80%,transparent);border-radius:8px;background:color-mix(in srgb,var(--panel) 82%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);pointer-events:auto;font-variant-numeric:tabular-nums}.pt-stat{display:flex;gap:6px;white-space:nowrap}.pt-stat b{font-weight:500}.pt-stat i{font-style:normal;color:var(--muted)}.pt-progress{position:absolute;left:0;bottom:0;height:2px;background:var(--accent);border-radius:2px;transition:width .2s linear}.pt-hint{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--muted);text-align:right}.pt-status .pt-icon-btn{height:26px}.pt-error{position:absolute;inset:0;display:grid;place-items:center;padding:24px;text-align:center;white-space:pre-wrap;color:var(--text);background:var(--bg)}.pt-error[hidden]{display:none}.pt-toast{position:absolute;left:50%;top:14px;transform:translate(-50%,-8px);padding:7px 12px;border-radius:6px;background:var(--text);color:var(--bg);font-weight:500;opacity:0;transition:opacity .18s,transform .18s;pointer-events:none;white-space:nowrap}.pt-toast.pt-show{opacity:1;transform:translate(-50%)}.pt-inspector-head{display:flex;align-items:center;gap:8px;padding:12px 12px 6px}.pt-inspector-head .pt-icon{color:var(--accent)}.pt-inspector-head h2{flex:1;margin:0;font-size:13px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pt-kind{color:var(--muted);font-size:11px}.pt-section{border-top:1px solid var(--line)}.pt-section:first-of-type{border-top:0}.pt-section>summary{display:flex;align-items:center;gap:6px;height:32px;padding:0 12px;color:var(--muted);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;list-style:none;user-select:none}.pt-section>summary::-webkit-details-marker{display:none}.pt-section>summary .pt-icon{width:12px;height:12px;transition:transform .15s;transform:rotate(-90deg)}.pt-section[open]>summary .pt-icon{transform:none}.pt-section>summary:hover{color:var(--text)}.pt-section-body{padding:0 12px 12px;display:flex;flex-direction:column;gap:6px}.pt-row{display:grid;grid-template-columns:92px minmax(0,1fr);align-items:center;gap:8px;min-height:26px}.pt-label{color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pt-note{color:var(--muted);font-size:11px;line-height:1.45;margin:2px 0 0}.pt-actions{display:flex;flex-wrap:wrap;gap:6px}.pt-actions .pt-btn{height:26px}.pt-num,.pt-text,.pt-hex,.pt-select{width:100%;height:26px;padding:0 8px;border:1px solid transparent;border-radius:4px;background:var(--field);outline:none;font-variant-numeric:tabular-nums}.pt-num{cursor:ew-resize;text-align:center}.pt-num:focus,.pt-text:focus,.pt-hex:focus{cursor:text;border-color:var(--accent);background:var(--bg);text-align:left}.pt-num:hover,.pt-select:hover,.pt-text:hover,.pt-hex:hover{background:var(--field-hover)}.pt-num.pt-scrubbing{border-color:color-mix(in srgb,var(--accent) 50%,transparent)}.pt-slider{background:linear-gradient(to right,color-mix(in srgb,var(--accent) 34%,var(--field)) var(--fill, 0%),var(--field) var(--fill, 0%))}.pt-slider:hover{background:linear-gradient(to right,color-mix(in srgb,var(--accent) 42%,var(--field-hover)) var(--fill, 0%),var(--field-hover) var(--fill, 0%))}.pt-select{cursor:pointer;padding-right:4px}.pt-select option{background:var(--panel);color:var(--text)}.pt-vec3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:3px}.pt-axis{position:relative;display:block}.pt-axis:before{content:"";position:absolute;left:0;top:5px;bottom:5px;width:2px;border-radius:2px;z-index:1}.pt-axis-x:before{background:var(--x)}.pt-axis-y:before{background:var(--y)}.pt-axis-z:before{background:var(--z)}.pt-vec3 .pt-num{padding:0 4px}.pt-color-field{display:grid;grid-template-columns:26px minmax(0,1fr);gap:4px}.pt-color{width:26px;height:26px;padding:0;border:1px solid var(--line);border-radius:4px;background:none;cursor:pointer}.pt-color::-webkit-color-swatch-wrapper{padding:2px}.pt-color::-webkit-color-swatch{border:0;border-radius:2px}.pt-color::-moz-color-swatch{border:0;border-radius:2px}.pt-switch{appearance:none;-webkit-appearance:none;position:relative;width:30px;height:17px;margin:0;border-radius:9px;background:var(--field-hover);cursor:pointer;transition:background .15s}.pt-switch:after{content:"";position:absolute;left:2px;top:2px;width:13px;height:13px;border-radius:50%;background:var(--muted);transition:transform .15s,background .15s}.pt-switch:checked{background:color-mix(in srgb,var(--accent) 55%,var(--field))}.pt-switch:checked:after{transform:translate(13px);background:var(--text)}.pt-preview{display:block;width:100%;aspect-ratio:16 / 10;margin-bottom:4px;border-radius:6px;background:var(--field)}.pt-material-pick{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:4px;align-items:center}.pt-menu{position:absolute;z-index:20;min-width:200px;max-height:min(70vh,520px);overflow-y:auto;padding:4px;border:1px solid var(--line);border-radius:8px;background:var(--panel-2);box-shadow:0 12px 32px #00000073}.pt-menu-title{padding:6px 8px 4px;color:var(--muted);font-size:11px;letter-spacing:.06em;text-transform:uppercase}.pt-menu-item{display:flex;align-items:center;gap:10px;width:100%;height:30px;padding:0 8px;border:0;border-radius:5px;background:transparent;cursor:pointer;text-align:left}.pt-menu-item:hover,.pt-menu-item:focus-visible{background:var(--field-hover);outline:none}.pt-menu-item .pt-icon{color:var(--muted)}.pt-menu-item kbd{margin-left:auto;color:var(--muted);font:11px ui-monospace,SFMono-Regular,Menlo,monospace}.pt-menu hr{margin:4px 0;border:0;border-top:1px solid var(--line)}.pt-modal-backdrop{position:absolute;inset:0;z-index:30;display:grid;place-items:center;padding:16px;background:#0000008c}.pt-modal{width:min(640px,100%);max-height:100%;overflow-y:auto;border:1px solid var(--line);border-radius:10px;background:var(--panel);box-shadow:0 24px 60px #00000080}.pt-modal-head{display:flex;align-items:center;gap:8px;padding:14px 14px 6px 18px}.pt-modal-head h2{flex:1;margin:0;font-size:15px;font-weight:600}.pt-modal-body{display:flex;flex-direction:column;gap:14px;padding:6px 18px 18px}.pt-modal-body p{margin:0;color:var(--muted);line-height:1.5}.pt-code-block{display:flex;flex-direction:column;gap:6px}.pt-code-head{display:flex;align-items:center;justify-content:space-between;gap:8px;font-weight:600}.pt-code{width:100%;min-height:76px;max-height:220px;padding:10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--text);font:11.5px/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;resize:vertical;white-space:pre}.pt-shortcuts{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;margin:0}.pt-shortcuts dt{font:11px ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--text);white-space:nowrap}.pt-shortcuts dd{margin:0;color:var(--muted)}@container pt-editor (max-width: 860px){.pt-body,.pt-editor.pt-no-left .pt-body,.pt-editor.pt-no-right .pt-body{grid-template-columns:0 minmax(0,1fr) 0}.pt-left,.pt-right{position:absolute;top:44px;bottom:0;z-index:10;width:min(300px,86%);box-shadow:0 0 40px #00000080}.pt-left{left:0}.pt-right{right:0}.pt-hint,.pt-brand-text,.pt-label-btn span{display:none}}@media(prefers-reduced-motion:reduce){*{transition:none!important}}', wn = "https://landry-16.github.io/path-tracer-web/", me = { sphere: "Sphere", box: "Box", cylinder: "Cylinder", cone: "Cone", plane: "Plane", disk: "Disk" }, Se = { area: "Area light", sphere: "Sphere light", point: "Point light", sun: "Sun" }, Oe = { area: "area", sphere: "light-sphere", point: "point", sun: "sun" };
function Ue(s) {
  const { fov: e, aperture: t, focusDistance: n } = s.camera;
  return JSON.stringify({ ...s, camera: { fov: e, aperture: t, focusDistance: n } });
}
function ht(s) {
  return JSON.stringify({ ...s, id: "", name: "" });
}
class Mn extends dt {
  host;
  root;
  viewer;
  gizmo;
  options;
  history;
  selection = null;
  fields = [];
  ui;
  swatchCache = /* @__PURE__ */ new Map();
  inspectorPreview = null;
  menu = null;
  modal = null;
  overlayHandle = 0;
  saveTimer = 0;
  followCommitTimer = 0;
  previewTimer = 0;
  toastTimer = 0;
  disposed = !1;
  constructor(e, t = {}) {
    super(), this.options = t, this.host = h("div", { class: "pt-editor-host" }), this.host.style.cssText = "display:block;width:100%;height:100%", e.appendChild(this.host), this.root = this.host.attachShadow({ mode: "open" }), this.root.append(h("style", {}, yn));
    let n = null;
    t.storageKey && (n = this.loadStored(t.storageKey));
    const i = n ?? (t.scene ? A(t.scene) : xe("studio")), r = h("div", { class: "pt-view" }), a = h("div", { class: "pt-toast", role: "status", "aria-live": "polite" }), o = h("div", { class: "pt-error", hidden: !0 }), l = h("b", {}, "0"), c = h("b", {}, "0"), d = h("b", {}, "0 x 0"), u = h("div", { class: "pt-progress" }), p = M("pause", "Pause rendering (Space)", () => this.togglePause()), g = h(
      "div",
      { class: "pt-status" },
      h("span", { class: "pt-stat" }, h("i", {}, "Samples"), l),
      h("span", { class: "pt-stat" }, h("i", {}, "Speed"), c, h("i", {}, "spp/s")),
      h("span", { class: "pt-stat" }, h("i", {}, "Size"), d),
      h("span", { class: "pt-hint" }, "Click to select, drag to orbit, right drag to pan, scroll to zoom"),
      p,
      M("camera", "Save image (PNG)", () => {
        this.capture();
      }),
      u
    ), m = h("main", { class: "pt-viewport" }, r, g, a, o);
    this.viewer = new xt(r, { scene: i, lightFollow: t.lightFollow ?? !1 }), this.viewer.lightFollowTarget = (N) => {
      const ze = this.selection?.type === "item" ? j(N, this.selection.id) : null;
      return ze?.kind === "light" && ze.item.type !== "sun" ? ze.item : N.lights.find((Qe) => Qe.enabled && Qe.type !== "sun") ?? null;
    }, this.gizmo = new vn(this.viewer, {
      selectedId: () => this.selection?.type === "item" ? this.selection.id : null,
      select: (N) => this.select(N),
      changed: () => this.changed(),
      commit: () => this.commit()
    }), this.viewer.addTool(this.gizmo), this.history = new xn(Ue(this.viewer.scene));
    const w = M("undo", "Undo (Ctrl+Z)", () => this.undo()), C = M("redo", "Redo (Ctrl+Shift+Z)", () => this.redo()), f = M("follow", "Light follows the pointer (L)", () => this.setLightFollow(!this.viewer.lightFollow)), S = {
      translate: M("move", "Move (W)", () => this.setMode("translate")),
      rotate: M("rotate", "Rotate (E)", () => this.setMode("rotate")),
      scale: M("scale", "Scale (R)", () => this.setMode("scale"))
    }, F = h("button", { type: "button", class: "pt-btn pt-primary pt-label-btn", title: "Add an object, a light or a material" }, P("plus"), h("span", {}, "Add"));
    F.addEventListener("click", (N) => this.openAddMenu(N.currentTarget));
    const W = h("button", { type: "button", class: "pt-btn pt-label-btn", title: "Load a preset scene" }, P("scene"), h("span", {}, "Scenes"));
    W.addEventListener("click", (N) => this.openSceneMenu(N.currentTarget));
    const ye = h(
      "header",
      { class: "pt-toolbar" },
      M("panel", "Toggle scene panel", () => this.togglePanel("left")),
      h("div", { class: "pt-brand" }, h("span", { class: "pt-brand-mark" }), h("span", { class: "pt-brand-text" }, "Path Tracer")),
      F,
      h("span", { class: "pt-sep" }),
      h("div", { class: "pt-group", role: "group", "aria-label": "Gizmo mode" }, S.translate, S.rotate, S.scale),
      f,
      h("span", { class: "pt-sep" }),
      w,
      C,
      h("span", { class: "pt-spacer" }),
      W,
      M("upload", "Import a scene (JSON)", () => this.importFile()),
      M("download", "Export the scene (JSON)", () => this.exportFile()),
      M("share", "Copy a share link", () => {
        this.share();
      }),
      M("code", "Embed this scene in another site", () => {
        this.openEmbed();
      }),
      h("span", { class: "pt-sep" }),
      M("panel-right", "Toggle inspector", () => this.togglePanel("right"))
    ), le = h("div", { class: "pt-scroll", role: "tree", "aria-label": "Scene" }), ce = h("div", { class: "pt-swatches" }), we = h(
      "aside",
      { class: "pt-left" },
      h(
        "section",
        { class: "pt-panel pt-outliner" },
        h("div", { class: "pt-panel-head" }, h("span", {}, "Scene"), M("plus", "Add", (N) => this.openAddMenu(N.currentTarget))),
        le
      ),
      h(
        "section",
        { class: "pt-panel pt-library" },
        h(
          "div",
          { class: "pt-panel-head" },
          h("span", {}, "Materials"),
          M("trash", "Remove unused materials", () => this.removeUnusedMaterials()),
          M("plus", "New material", (N) => this.openMaterialMenu(N.currentTarget))
        ),
        h("div", { class: "pt-scroll" }, ce)
      )
    ), he = h("div", { class: "pt-inspector" }), Me = h("aside", { class: "pt-right", "aria-label": "Inspector" }, he), Le = h("div", { class: "pt-editor", tabindex: "-1" }, ye, h("div", { class: "pt-body" }, we, m, Me));
    this.root.append(Le), this.ui = { shell: Le, tree: le, swatches: ce, inspector: he, viewport: m, samples: l, speed: c, resolution: d, progress: u, pause: p, undo: w, redo: C, follow: f, modes: S, toast: a, error: o };
    const Mt = e.clientWidth > 0 && e.clientWidth < 860;
    (t.panels === !1 || Mt) && Le.classList.add("pt-no-left", "pt-no-right"), this.bindEvents(), this.setMode("translate"), this.setLightFollow(this.viewer.lightFollow), this.rebuild(), this.overlayHandle = requestAnimationFrame(this.drawOverlay);
  }
  /* ================================================================ API */
  /** The live scene. Mutate it and call `refresh()` (or let the next frame pick it up). */
  get scene() {
    return this.viewer.scene;
  }
  /** A deep copy of the scene, safe to store or send. */
  getScene() {
    return gt(this.viewer.scene);
  }
  toJSON() {
    return this.getScene();
  }
  /** Loads a new scene and clears the undo history. */
  setScene(e) {
    this.viewer.setScene(e), this.selection = null, this.history.reset(Ue(this.viewer.scene)), this.rebuild(), this.save(), this.emit("change", { scene: this.viewer.scene });
  }
  /** Id of the selected object or light. */
  get selectedId() {
    return this.selection?.type === "item" ? this.selection.id : null;
  }
  select(e) {
    const t = e ? this.scene.materials.find((i) => i.id === e) : null, n = j(this.scene, e);
    this.selection = t ? { type: "material", id: t.id } : n ? { type: "item", id: n.item.id } : null, this.renderTree(), this.renderSwatches(), this.renderInspector(), this.emit("select", { id: this.selection?.id ?? null, kind: t ? "material" : n ? n.kind : null });
  }
  addObject(e, t = {}) {
    const n = t.materialId ? null : Ne("plastic", { name: `${me[e]} material`, baseColor: "#d4d4d4" });
    n && this.scene.materials.push(n);
    const i = e === "plane" || e === "disk", r = i ? 1.5 : 0.6, a = v(e, {
      name: this.uniqueName(me[e], this.scene.objects),
      scale: i ? [r, 1, r] : [r, r, r],
      materialId: n?.id,
      position: this.dropPoint(i ? 1e-3 : r / 2),
      ...t
    });
    return this.scene.objects.push(a), this.commit(), this.select(a.id), a;
  }
  addLight(e, t = {}) {
    const n = O(e, { name: this.uniqueName(Se[e], this.scene.lights), position: this.lightPoint(e), ...t });
    return this.scene.lights.push(n), this.commit(), this.select(n.id), n;
  }
  addMaterial(e = {}, t = "plastic") {
    const n = Ne(t, e);
    n.name = this.uniqueName(n.name, this.scene.materials), this.scene.materials.push(n);
    const i = this.selection?.type === "item" ? j(this.scene, this.selection.id) : null;
    return i?.kind === "object" ? (i.item.materialId = n.id, this.commit(), this.renderInspector()) : (this.commit(), this.select(n.id)), n;
  }
  /** Removes an object, a light or a material (objects using it fall back to another material). */
  remove(e) {
    const t = this.scene, n = t.materials.findIndex((i) => i.id === e);
    if (n >= 0) {
      if (t.materials.length <= 1) {
        this.toast("A scene needs at least one material");
        return;
      }
      t.materials.splice(n, 1);
      const i = t.materials[0].id;
      for (const r of t.objects) r.materialId === e && (r.materialId = i);
    } else
      t.objects = t.objects.filter((i) => i.id !== e), t.lights = t.lights.filter((i) => i.id !== e);
    this.selection?.id === e && (this.selection = null), this.commit(), this.rebuild();
  }
  /** Duplicates an object or light, slightly offset, and selects the copy. */
  duplicate(e) {
    const t = j(this.scene, e);
    if (!t) return null;
    const n = [0.25, 0, 0.25];
    if (t.kind === "object") {
      const r = { ...structuredClone(t.item), id: D("obj"), name: this.uniqueName(t.item.name, this.scene.objects) };
      return r.position = L(r.position, n), this.scene.objects.push(r), this.commit(), this.select(r.id), r.id;
    }
    const i = { ...structuredClone(t.item), id: D("light"), name: this.uniqueName(t.item.name, this.scene.lights) };
    return i.position = L(i.position, n), this.scene.lights.push(i), this.commit(), this.select(i.id), i.id;
  }
  undo() {
    const e = this.history.undo();
    e && this.restore(e);
  }
  redo() {
    const e = this.history.redo();
    e && this.restore(e);
  }
  setMode(e) {
    this.gizmo.mode = e;
    for (const [t, n] of Object.entries(this.ui.modes)) n.classList.toggle("pt-active", t === e);
  }
  setLightFollow(e) {
    this.viewer.lightFollow = e, this.ui.follow.classList.toggle("pt-active", e), this.ui.follow.setAttribute("aria-pressed", String(e));
  }
  /** Re-reads the scene after outside code mutated it. */
  refresh() {
    this.rebuild();
  }
  dispose() {
    this.disposed = !0, cancelAnimationFrame(this.overlayHandle), this.viewer.dispose(), this.host.remove();
  }
  /* ========================================================= state flow */
  /** Live edit: re-sync the inspector and previews, without an undo step. */
  changed() {
    this.fields.forEach((e) => e.refresh()), this.schedulePreviews(), this.emit("input", { scene: this.scene });
  }
  /** Finished edit: record an undo step, save, refresh the panels. */
  commit() {
    this.history.push(Ue(this.scene)) && this.emit("change", { scene: this.scene }), this.updateUndoButtons(), this.renderTree(), this.renderSwatches(), this.fields.forEach((e) => e.refresh()), this.schedulePreviews(), this.scheduleSave();
  }
  restore(e) {
    const t = this.scene.camera, n = A(JSON.parse(e));
    n.camera = { ...t, ...n.camera, target: t.target, yaw: t.yaw, pitch: t.pitch, distance: t.distance }, this.viewer.setScene(n, { keepHome: !0 }), this.selection && !j(n, this.selection.id) && !n.materials.some((i) => i.id === this.selection?.id) && (this.selection = null), this.rebuild(), this.scheduleSave(), this.emit("change", { scene: this.scene });
  }
  rebuild() {
    this.updateUndoButtons(), this.renderTree(), this.renderSwatches(), this.renderInspector();
  }
  updateUndoButtons() {
    this.ui.undo.disabled = !this.history.canUndo, this.ui.redo.disabled = !this.history.canRedo;
  }
  hooks() {
    return { onInput: () => this.changed(), onCommit: () => this.commit() };
  }
  /* ======================================================== persistence */
  loadStored(e) {
    try {
      const t = localStorage.getItem(e);
      return t ? A(JSON.parse(t)) : null;
    } catch {
      return null;
    }
  }
  save() {
    const e = this.options.storageKey;
    if (e)
      try {
        localStorage.setItem(e, JSON.stringify(this.scene));
      } catch {
      }
  }
  scheduleSave() {
    this.options.storageKey && (clearTimeout(this.saveTimer), this.saveTimer = window.setTimeout(() => this.save(), 400));
  }
  /* ============================================================= events */
  bindEvents() {
    const e = this.viewer;
    e.on("frame", (n) => {
      this.ui.samples.textContent = n.converged ? `${n.samples} done` : String(n.samples), this.ui.speed.textContent = String(n.samplesPerSecond), this.ui.resolution.textContent = `${n.width} x ${n.height}`;
      const i = this.scene.render.maxSamples;
      this.ui.progress.style.width = i > 0 ? `${Math.min(100, n.samples / i * 100)}%` : "0";
    }), e.on("error", ({ message: n }) => {
      this.ui.error.textContent = n, this.ui.error.hidden = !1;
    }), e.on("change", ({ source: n }) => {
      n === "light" ? (this.changed(), clearTimeout(this.followCommitTimer), this.followCommitTimer = window.setTimeout(() => this.commit(), 500)) : this.scheduleSave();
    }), e.on("tap", (n) => {
      if (n.altKey) {
        const i = se(this.scene, e.rayAt(n.clientX, n.clientY), { lights: !1 });
        if (i) {
          const r = B(this.scene.camera);
          this.scene.camera.focusDistance = Math.max(0.01, ge(_(i.point, r.position))), this.scene.camera.aperture === 0 && (this.scene.camera.aperture = 0.03), this.commit(), this.toast(`Focus at ${this.scene.camera.focusDistance.toFixed(2)}`);
        }
        return;
      }
      this.gizmo.tap(n.clientX, n.clientY);
    }), e.canvas.addEventListener("dblclick", () => {
      this.selectedId && this.frameSelection();
    }), this.ui.shell.addEventListener("keydown", this.onKeyDown), this.root.addEventListener("pointerdown", (n) => {
      this.menu && !this.menu.contains(n.target) && this.closeMenu();
    });
    const t = this.ui.viewport;
    this.ui.shell.addEventListener("dragover", (n) => {
      const i = n.dataTransfer?.types ?? [];
      (i.includes("Files") || i.includes("application/x-pt-material")) && (n.preventDefault(), t.classList.toggle("pt-drop-target", i.includes("application/x-pt-material") && !!this.gizmo.objectAt(n.clientX, n.clientY)));
    }), this.ui.shell.addEventListener("dragleave", () => t.classList.remove("pt-drop-target")), this.ui.shell.addEventListener("drop", (n) => {
      t.classList.remove("pt-drop-target");
      const i = n.dataTransfer?.getData("application/x-pt-material");
      if (i) {
        n.preventDefault();
        const a = this.gizmo.objectAt(n.clientX, n.clientY), o = this.scene.objects.find((l) => l.id === a);
        o && (o.materialId = i, this.commit(), this.select(o.id));
        return;
      }
      const r = n.dataTransfer?.files[0];
      r && (n.preventDefault(), this.readFile(r));
    });
  }
  onKeyDown = (e) => {
    const t = e.composedPath()[0];
    if (t && /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName)) return;
    const n = e.ctrlKey || e.metaKey, i = e.key.toLowerCase();
    if (n && i === "z") {
      e.preventDefault(), e.shiftKey ? this.redo() : this.undo();
      return;
    }
    if (n && i === "y") {
      e.preventDefault(), this.redo();
      return;
    }
    if (n && i === "d") {
      e.preventDefault(), this.selectedId && this.duplicate(this.selectedId);
      return;
    }
    if (n && i === "s") {
      e.preventDefault(), this.exportFile();
      return;
    }
    if (!(n || e.altKey)) {
      switch (i) {
        case "w":
          this.setMode("translate");
          break;
        case "e":
          this.setMode("rotate");
          break;
        case "r":
          this.setMode("scale");
          break;
        case "l":
          this.setLightFollow(!this.viewer.lightFollow);
          break;
        case "f":
          this.frameSelection();
          break;
        case "h":
          this.gizmo.hidden = !this.gizmo.hidden;
          break;
        case " ":
          this.togglePause();
          break;
        case "?":
          this.openShortcuts();
          break;
        case "escape":
          this.modal ? this.closeModal() : this.menu ? this.closeMenu() : this.select(null);
          break;
        case "delete":
        case "backspace":
          this.selection && this.remove(this.selection.id);
          break;
        default:
          return;
      }
      e.preventDefault();
    }
  };
  /* ========================================================= operations */
  uniqueName(e, t) {
    const n = new Set(t.map((r) => r.name)), i = e.replace(/ \d+$/, "");
    if (!n.has(i)) return i;
    for (let r = 2; ; r++) if (!n.has(`${i} ${r}`)) return `${i} ${r}`;
  }
  /** Where a new object lands: on the surface at the center of the view. */
  dropPoint(e) {
    const t = this.viewer.rayAt(...this.viewportCenter()), n = se(this.scene, t, { lights: !1 });
    if (n && n.normal[1] > 0.5) return L(n.point, [0, e, 0]);
    const i = this.scene.camera.target;
    return [i[0], Math.max(e, 0), i[2]];
  }
  /** Lights go under the ceiling above the view center when there is one, otherwise above it. */
  lightPoint(e) {
    const t = this.scene.camera.target, n = se(this.scene, { origin: t, direction: [0, 1, 0] }, { lights: !1 });
    return e === "sun" ? L(t, [0, 2, 0]) : n && n.t < 6 ? L(t, [0, n.t - (e === "area" ? 2e-3 : 0.3), 0]) : L(t, [0, 1.6, 0]);
  }
  viewportCenter() {
    const e = this.viewer.canvas.getBoundingClientRect();
    return [e.left + e.width / 2, e.top + e.height / 2];
  }
  frameSelection() {
    const e = this.selectedId ? j(this.scene, this.selectedId) : null;
    if (!e) {
      this.viewer.resetCamera();
      return;
    }
    if (e.kind === "object") {
      const t = ut(e.item), n = R(L(t.min, t.max), 0.5);
      et(this.scene.camera, n, Math.max(0.1, ge(_(t.max, t.min)) / 2));
    } else
      et(this.scene.camera, e.item.position, e.item.type === "area" ? Math.max(...e.item.size) : 0.5);
    this.scheduleSave();
  }
  removeUnusedMaterials() {
    const e = new Set(this.scene.objects.map((i) => i.materialId)), t = this.scene.materials.length;
    this.scene.materials = this.scene.materials.filter((i) => e.has(i.id)), this.scene.materials.length === 0 && (this.scene.materials = [Ne("plastic", { name: "Default" })]);
    const n = t - this.scene.materials.length;
    this.selection?.type === "material" && !this.scene.materials.some((i) => i.id === this.selection?.id) && (this.selection = null), this.commit(), this.rebuild(), this.toast(n > 0 ? `Removed ${n} unused material${n > 1 ? "s" : ""}` : "Every material is in use");
  }
  togglePause() {
    this.viewer.paused = !this.viewer.paused, this.ui.pause.replaceChildren(P(this.viewer.paused ? "play" : "pause")), this.ui.pause.title = this.viewer.paused ? "Resume rendering (Space)" : "Pause rendering (Space)";
  }
  togglePanel(e) {
    this.ui.shell.classList.toggle(e === "left" ? "pt-no-left" : "pt-no-right");
  }
  toast(e) {
    const t = this.ui.toast;
    t.textContent = e, t.classList.add("pt-show"), clearTimeout(this.toastTimer), this.toastTimer = window.setTimeout(() => t.classList.remove("pt-show"), 1800);
  }
  /* ======================================================== file / share */
  download(e, t) {
    const n = document.createElement("a");
    n.href = URL.createObjectURL(t), n.download = e, n.click(), setTimeout(() => URL.revokeObjectURL(n.href), 1e3);
  }
  fileName(e) {
    return `${this.scene.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "scene"}.${e}`;
  }
  async capture() {
    const e = this.gizmo.hidden, t = await this.viewer.toBlob();
    this.gizmo.hidden = e, this.download(this.fileName("png").replace(".png", `-${this.viewer.samples}spp.png`), t);
  }
  exportFile() {
    this.download(this.fileName("json"), new Blob([JSON.stringify(this.scene, null, 2)], { type: "application/json" }));
  }
  importFile() {
    const e = h("input", { type: "file", accept: "application/json,.json" });
    e.addEventListener("change", () => {
      const t = e.files?.[0];
      t && this.readFile(t);
    }), e.click();
  }
  async readFile(e) {
    try {
      const t = A(JSON.parse(await e.text()));
      this.setScene(t), this.toast(`Loaded ${t.name}`);
    } catch {
      this.toast("This file is not a valid scene");
    }
  }
  baseUrl() {
    const e = this.options.baseUrl ?? wn;
    return e.endsWith("/") ? e : `${e}/`;
  }
  async shareUrl(e = "") {
    return `${this.baseUrl()}${e}#s=${await rn(this.scene)}`;
  }
  async copy(e, t) {
    try {
      await navigator.clipboard.writeText(e), this.toast(t);
    } catch {
      this.toast("Copy failed: select the text and copy it manually");
    }
  }
  async share() {
    await this.copy(await this.shareUrl(), "Share link copied");
  }
  async openEmbed() {
    const e = this.baseUrl(), n = `<iframe src="${await this.shareUrl("viewer.html")}"
  style="width: 100%; aspect-ratio: 16 / 10; border: 0"
  title="${this.scene.name}" loading="lazy" allow="fullscreen"></iframe>`, i = JSON.stringify(this.scene), r = `<script type="module" src="${e}lib/path-tracer.js"><\/script>

<pt-viewer light-follow style="height: 420px">
  <script type="application/json">${i}<\/script>
</pt-viewer>`, a = `import { Viewer } from "path-tracer-web";
import scene from "./scene.json";

const viewer = new Viewer(document.querySelector("#view"), { scene });`, o = (l, c, d) => {
      const u = h("textarea", { class: "pt-code", readonly: !0, spellcheck: "false" }, c);
      return h(
        "div",
        { class: "pt-code-block" },
        h("div", { class: "pt-code-head" }, h("span", {}, l), h("button", { type: "button", class: "pt-btn", onclick: () => {
          this.copy(c, `${d} copied`);
        } }, P("copy"), "Copy")),
        u
      );
    };
    this.openModal(
      "Embed this scene",
      h("p", {}, "Paste one of these snippets into another site. The iframe needs nothing else; the web component loads the library from this deployment and keeps the page's own styles untouched."),
      o("Iframe", n, "Iframe code"),
      o("Web component", r, "Web component code"),
      o("JavaScript module", a, "Code"),
      h("div", { class: "pt-actions" }, h("button", { type: "button", class: "pt-btn", onclick: () => this.exportFile() }, P("download"), "Download scene.json"))
    );
  }
  openShortcuts() {
    const e = [
      ["Click", "Select an object or a light"],
      ["Drag", "Orbit (drag the selection to move it)"],
      ["Right drag / Shift drag", "Pan"],
      ["Wheel", "Zoom"],
      ["Double click", "Frame the selection"],
      ["Alt + click", "Focus the depth of field on a surface"],
      ["W / E / R", "Move, rotate, scale gizmo"],
      ["Ctrl while dragging", "Snap"],
      ["L", "Light follows the pointer"],
      ["F", "Frame the selection (or reset the view)"],
      ["H", "Hide the overlay"],
      ["Delete", "Remove the selection"],
      ["Ctrl + D", "Duplicate"],
      ["Ctrl + Z / Ctrl + Shift + Z", "Undo / redo"],
      ["Ctrl + S", "Export the scene"],
      ["Space", "Pause rendering"]
    ];
    this.openModal("Shortcuts", h("dl", { class: "pt-shortcuts" }, ...e.flatMap(([t, n]) => [h("dt", {}, t), h("dd", {}, n)])));
  }
  openModal(e, ...t) {
    this.closeModal();
    const n = h(
      "div",
      { class: "pt-modal-backdrop" },
      h(
        "div",
        { class: "pt-modal", role: "dialog", "aria-modal": "true", "aria-label": e },
        h("div", { class: "pt-modal-head" }, h("h2", {}, e), M("close", "Close", () => this.closeModal())),
        h("div", { class: "pt-modal-body" }, ...t)
      )
    );
    n.addEventListener("pointerdown", (i) => {
      i.target === n && this.closeModal();
    }), n.addEventListener("keydown", (i) => {
      i.key === "Escape" && this.closeModal();
    }), this.ui.shell.append(n), this.modal = n, n.querySelector(".pt-modal .pt-icon-btn")?.focus();
  }
  closeModal() {
    this.modal?.remove(), this.modal = null, this.ui.shell.focus({ preventScroll: !0 });
  }
  /* ============================================================== menus */
  openMenu(e, ...t) {
    const n = this.menu?.dataset.anchor === e.dataset.menuId && !!e.dataset.menuId;
    if (this.closeMenu(), n) return;
    e.dataset.menuId ||= D("menu");
    const i = h("div", { class: "pt-menu", role: "menu" }, ...t);
    i.dataset.anchor = e.dataset.menuId;
    const r = this.ui.shell.getBoundingClientRect(), a = e.getBoundingClientRect();
    i.style.top = `${a.bottom - r.top + 4}px`, this.ui.shell.append(i);
    const o = Math.min(a.left - r.left, r.width - i.offsetWidth - 8);
    i.style.left = `${Math.max(8, o)}px`, this.menu = i, i.querySelector(".pt-menu-item")?.focus();
  }
  closeMenu() {
    this.menu?.remove(), this.menu = null;
  }
  menuItem(e, t, n, i) {
    const r = h("button", { type: "button", class: "pt-menu-item", role: "menuitem" }, P(e), h("span", {}, t), i ? h("kbd", {}, i) : null);
    return r.addEventListener("click", () => {
      this.closeMenu(), n();
    }), r;
  }
  openAddMenu(e) {
    this.openMenu(
      e,
      h("div", { class: "pt-menu-title" }, "Primitives"),
      ...be.map((t) => this.menuItem(t, me[t], () => this.addObject(t))),
      h("hr"),
      h("div", { class: "pt-menu-title" }, "Lights"),
      ...$e.map((t) => this.menuItem(Oe[t], Se[t], () => this.addLight(t))),
      h("hr"),
      this.menuItem("material", "Material", () => this.addMaterial())
    );
  }
  openMaterialMenu(e) {
    this.openMenu(
      e,
      h("div", { class: "pt-menu-title" }, "New material from"),
      ...Ee.map((t) => this.menuItem("material", t.label, () => this.addMaterial({}, t.id)))
    );
  }
  openSceneMenu(e) {
    this.openMenu(
      e,
      h("div", { class: "pt-menu-title" }, "Load a scene"),
      ...Xe.map((t) => this.menuItem("scene", t.label, () => this.setScene(xe(t.id)))),
      h("hr"),
      this.menuItem("code", "Keyboard shortcuts", () => this.openShortcuts(), "?"),
      this.menuItem("share", "Embedding guide", () => window.open(`${this.baseUrl()}embed.html`, "_blank", "noopener"))
    );
  }
  /* =========================================================== outliner */
  renderTree() {
    const e = this.ui.tree, t = this.selection?.id, n = (o, l, c, d, u, p) => {
      const g = h("span", { class: "pt-tree-name" }, c), m = M(d ? "eye" : "eye-off", p, (f) => {
        f.stopPropagation(), u(), this.commit();
      }, d ? "" : "pt-off"), w = M("trash", "Remove", (f) => {
        f.stopPropagation(), this.remove(o);
      }), C = h("div", { class: `pt-tree-row${o === t ? " pt-selected" : ""}${d ? "" : " pt-dim"}`, role: "treeitem", tabindex: "0", "aria-selected": String(o === t) }, P(l), g, m, w);
      return C.addEventListener("click", () => this.select(o)), C.addEventListener("keydown", (f) => {
        f.key === "Enter" && this.select(o);
      }), C.addEventListener("dblclick", () => this.renameInline(o, g)), C;
    }, i = this.scene, r = h("div", { class: `pt-tree-row${this.selection === null ? " pt-selected" : ""}`, role: "treeitem", tabindex: "0" }, P("scene"), h("span", { class: "pt-tree-name" }, `${i.name} settings`));
    r.addEventListener("click", () => this.select(null)), e.replaceChildren(
      r,
      h("div", { class: "pt-tree-group" }, `Lights (${i.lights.length})`),
      ...i.lights.map((o) => n(o.id, Oe[o.type], o.name, o.enabled, () => o.enabled = !o.enabled, o.enabled ? "Turn off" : "Turn on")),
      h("div", { class: "pt-tree-group" }, `Objects (${i.objects.length})`),
      ...i.objects.map((o) => n(o.id, o.shape, o.name, o.visible, () => o.visible = !o.visible, o.visible ? "Hide" : "Show"))
    );
    const a = e.querySelector(".pt-selected");
    if (a) {
      const o = a.offsetTop - e.offsetTop;
      o < e.scrollTop ? e.scrollTop = o : o + a.offsetHeight > e.scrollTop + e.clientHeight && (e.scrollTop = o + a.offsetHeight - e.clientHeight);
    }
  }
  renameInline(e, t) {
    const n = j(this.scene, e);
    if (!n) return;
    const i = h("input", { class: "pt-rename", value: n.item.name, spellcheck: "false" });
    t.replaceWith(i), i.focus(), i.select();
    const r = (a) => {
      i.value.trim() && (n.item.name = i.value.trim()), this.commit(), this.renderInspector();
    };
    i.addEventListener("keydown", (a) => {
      a.stopPropagation(), a.key === "Enter" && i.blur(), a.key === "Escape" && (i.value = n.item.name, i.blur());
    }), i.addEventListener("blur", () => r(), { once: !0 });
  }
  /* ========================================================== materials */
  renderSwatches() {
    const e = this.scene, t = this.selection, n = t?.type === "item" ? j(e, t.id) : null, i = t?.type === "material" ? t.id : n?.kind === "object" ? n.item.materialId : null, r = /* @__PURE__ */ new Set(), a = [];
    for (const o of e.materials) {
      r.add(o.id);
      let l = this.swatchCache.get(o.id);
      if (!l) {
        const d = h("canvas", { width: 64, height: 64 }), u = h("button", { type: "button", class: "pt-swatch", draggable: "true" }, d, h("span", {}));
        u.addEventListener("click", () => this.onSwatchClick(o.id)), u.addEventListener("dblclick", () => this.select(o.id)), u.addEventListener("dragstart", (p) => {
          p.dataTransfer?.setData("application/x-pt-material", o.id), p.dataTransfer && (p.dataTransfer.effectAllowed = "copy");
        }), l = { el: u, canvas: d, key: "" }, this.swatchCache.set(o.id, l);
      }
      const c = l.el.querySelector("span");
      c && (c.textContent = o.name), l.el.title = `${o.name}: click to ${n?.kind === "object" ? "assign to the selection" : "edit"}, drag onto an object to assign`, l.el.classList.toggle("pt-selected", o.id === i), l.el.classList.toggle("pt-used", e.objects.some((d) => d.materialId === o.id)), a.push(l.el);
    }
    for (const o of [...this.swatchCache.keys()]) r.has(o) || this.swatchCache.delete(o);
    this.ui.swatches.replaceChildren(...a), this.schedulePreviews(0);
  }
  onSwatchClick(e) {
    const t = this.selection?.type === "item" ? j(this.scene, this.selection.id) : null;
    if (t?.kind === "object") {
      t.item.materialId !== e && (t.item.materialId = e, this.commit(), this.renderInspector());
      return;
    }
    this.select(e);
  }
  /** Re-renders the thumbnails whose material changed, after a short pause in editing. */
  schedulePreviews(e = 180) {
    clearTimeout(this.previewTimer), this.previewTimer = window.setTimeout(() => {
      if (this.disposed) return;
      for (const n of this.scene.materials) {
        const i = this.swatchCache.get(n.id), r = ht(n);
        i && i.key !== r && (i.key = r, Ye(n, i.canvas, { samples: 48 }));
      }
      const t = this.inspectorPreview;
      if (t) {
        const n = this.scene.materials.find((r) => r.id === t.materialId), i = n ? ht(n) : "";
        n && t.key !== i && (t.key = i, Ye(n, t.canvas, { samples: 128 }));
      }
    }, e);
  }
  /* ========================================================== inspector */
  renderInspector() {
    const e = this.ui.inspector;
    this.fields = [], this.inspectorPreview = null, e.replaceChildren();
    const t = this.selection;
    if (t?.type === "material") {
      const n = this.scene.materials.find((i) => i.id === t.id);
      n && e.append(this.head("material", n.name, "Material"), ...this.materialSections(n, !0));
    } else if (t?.type === "item") {
      const n = j(this.scene, t.id);
      n?.kind === "object" ? e.append(...this.objectInspector(n.item)) : n?.kind === "light" && e.append(...this.lightInspector(n.item));
    } else
      e.append(...this.sceneInspector());
    this.schedulePreviews(0);
  }
  head(e, t, n) {
    return h("div", { class: "pt-inspector-head" }, P(e), h("h2", {}, t), h("span", { class: "pt-kind" }, n));
  }
  add(e) {
    return this.fields.push(e), e.el;
  }
  body(...e) {
    return h("div", { class: "pt-section-body" }, ...e);
  }
  objectInspector(e) {
    const t = this.hooks(), n = { onInput: t.onInput, onCommit: () => (this.commit(), this.renderInspector()) }, i = Wt(this.scene, e.materialId), r = this.scene.objects.filter((c) => c.materialId === i.id).length, a = h("select", { class: "pt-select", "aria-label": "Material" }, ...this.scene.materials.map((c) => h("option", { value: c.id }, c.name)));
    a.value = i.id, a.addEventListener("change", () => {
      e.materialId = a.value, this.commit(), this.renderInspector();
    });
    const o = M("copy", "Make a unique copy of this material for this object", () => {
      const c = { ...structuredClone(i), id: D("mat"), name: this.uniqueName(`${i.name} copy`, this.scene.materials) };
      this.scene.materials.push(c), e.materialId = c.id, this.commit(), this.renderInspector();
    }), l = M("plus", "New material from a preset", (c) => this.openMaterialMenu(c.currentTarget));
    return [
      this.head(e.shape, e.name, me[e.shape]),
      I(
        "Object",
        this.body(
          this.add(ue("Name", () => e.name, (c) => e.name = c, n)),
          this.add(te("Shape", be.map((c) => ({ value: c, label: me[c] })), () => e.shape, (c) => e.shape = c, n)),
          this.add(je("Visible", () => e.visible, (c) => e.visible = c, t))
        )
      ),
      I(
        "Transform",
        this.body(
          this.add(pe("Position", () => e.position, (c) => e.position = c, t, { step: 0.01, precision: 3 })),
          this.add(pe("Rotation", () => e.rotation, (c) => e.rotation = c, t, { step: 0.5, precision: 1, suffix: "°" })),
          this.add(pe("Size", () => e.scale, (c) => e.scale = c.map((d) => Math.max(1e-3, d)), t, { step: 0.01, precision: 3, min: 1e-3 })),
          h(
            "div",
            { class: "pt-actions" },
            h("button", { type: "button", class: "pt-btn", onclick: () => this.frameSelection() }, P("focus"), "Frame"),
            h("button", { type: "button", class: "pt-btn", onclick: () => this.duplicate(e.id) }, P("copy"), "Duplicate"),
            h("button", { type: "button", class: "pt-btn", onclick: () => this.remove(e.id) }, P("trash"), "Remove")
          )
        )
      ),
      I(
        "Material",
        this.body(
          h("div", { class: "pt-material-pick" }, a, o, l),
          r > 1 ? h("p", { class: "pt-note" }, `Shared by ${r} objects: changes apply to all of them. Use the copy button to edit this object alone.`) : null
        )
      ),
      ...this.materialSections(i, !1)
    ];
  }
  materialSections(e, t) {
    const n = this.hooks(), i = { onInput: n.onInput, onCommit: () => (this.commit(), this.renderInspector()) }, r = { min: 0, max: 1, step: 0.01, precision: 2, slider: !0 }, a = h("canvas", { class: "pt-preview", width: 320, height: 200 });
    this.inspectorPreview = { canvas: a, materialId: e.id, key: "" };
    const o = this.scene.objects.filter((l) => l.materialId === e.id).length;
    return [
      I(
        t ? "Material" : "Surface",
        this.body(
          a,
          t ? this.add(ue("Name", () => e.name, (l) => e.name = l, i)) : this.add(ue("Material", () => e.name, (l) => e.name = l, i)),
          this.add(G("Base color", () => e.baseColor, (l) => e.baseColor = l, n)),
          this.add(k("Metallic", () => e.metallic, (l) => e.metallic = l, n, r)),
          this.add(k("Roughness", () => e.roughness, (l) => e.roughness = l, n, r)),
          this.add(k("Specular", () => e.specular, (l) => e.specular = l, n, r))
        )
      ),
      I(
        "Transmission",
        this.body(
          this.add(k("Transmission", () => e.transmission, (l) => e.transmission = l, n, r)),
          this.add(k("IOR", () => e.ior, (l) => e.ior = l, n, { min: 1, max: 3, step: 0.01, precision: 3, slider: !0 }))
        )
      ),
      I(
        "Clearcoat",
        this.body(
          this.add(k("Clearcoat", () => e.clearcoat, (l) => e.clearcoat = l, n, r)),
          this.add(k("Coat rough.", () => e.clearcoatRoughness, (l) => e.clearcoatRoughness = l, n, r))
        )
      ),
      I(
        "Emission",
        this.body(
          this.add(G("Color", () => e.emission, (l) => e.emission = l, n)),
          this.add(k("Strength", () => e.emissionStrength, (l) => e.emissionStrength = l, n, { min: 0, max: 1e3, step: 0.05, precision: 2 }))
        )
      ),
      I(
        "Pattern",
        this.body(
          this.add(te("Pattern", [{ value: "none", label: "None" }, { value: "checker", label: "Checker" }], () => e.pattern, (l) => e.pattern = l, n)),
          this.add(G("Color", () => e.patternColor, (l) => e.patternColor = l, n)),
          this.add(k("Cells / unit", () => e.patternScale, (l) => e.patternScale = l, n, { min: 0.01, max: 1e3, step: 0.1, precision: 2 }))
        )
      ),
      ...t ? [
        I(
          "Usage",
          this.body(
            h("p", { class: "pt-note" }, o === 0 ? "Not used by any object yet. Drag the swatch onto an object, or select an object and click the swatch." : `Used by ${o} object${o > 1 ? "s" : ""}.`),
            h(
              "div",
              { class: "pt-actions" },
              h("button", {
                type: "button",
                class: "pt-btn",
                onclick: () => {
                  const l = { ...structuredClone(e), id: D("mat"), name: this.uniqueName(`${e.name} copy`, this.scene.materials) };
                  this.scene.materials.push(l), this.commit(), this.select(l.id);
                }
              }, P("copy"), "Duplicate"),
              h("button", { type: "button", class: "pt-btn", onclick: () => this.remove(e.id) }, P("trash"), "Delete")
            )
          )
        )
      ] : []
    ];
  }
  lightInspector(e) {
    const t = this.hooks(), n = { onInput: t.onInput, onCommit: () => (this.commit(), this.renderInspector()) }, i = e.type === "sun" ? "Irradiance" : e.type === "point" ? "Intensity" : "Radiance";
    return [
      this.head(Oe[e.type], e.name, Se[e.type]),
      I(
        "Light",
        this.body(
          this.add(ue("Name", () => e.name, (r) => e.name = r, n)),
          this.add(te("Type", $e.map((r) => ({ value: r, label: Se[r] })), () => e.type, (r) => e.type = r, n)),
          this.add(je("Enabled", () => e.enabled, (r) => e.enabled = r, n)),
          e.type === "area" || e.type === "sphere" ? this.add(je("Seen by camera", () => e.visible, (r) => e.visible = r, t)) : null,
          this.add(G("Color", () => e.color, (r) => e.color = r, t)),
          this.add(k(i, () => e.intensity, (r) => e.intensity = r, t, { min: 0, max: 1e5, step: 0.1, precision: 2 })),
          e.type === "area" ? this.add(k("Width", () => e.size[0], (r) => e.size = [Math.max(1e-3, r), e.size[1]], t, { min: 1e-3, step: 0.01, precision: 3 })) : null,
          e.type === "area" ? this.add(k("Depth", () => e.size[1], (r) => e.size = [e.size[0], Math.max(1e-3, r)], t, { min: 1e-3, step: 0.01, precision: 3 })) : null,
          e.type === "sphere" ? this.add(k("Radius", () => e.radius, (r) => e.radius = r, t, { min: 1e-3, step: 5e-3, precision: 3 })) : null,
          e.type === "sun" ? this.add(k("Angle", () => e.angle, (r) => e.angle = r, t, { min: 0, max: 30, step: 0.05, precision: 2, suffix: "°" })) : null,
          h("p", { class: "pt-note" }, e.type === "sun" ? "A sun lights the scene from infinitely far away along its -Y axis; its position only places the handle." : e.type === "area" ? "Area lights shine along their local -Y axis and are invisible from behind." : e.type === "point" ? "Point lights are infinitely small: sharp shadows, no visible emitter." : "Sphere lights cast soft shadows proportional to their radius.")
        )
      ),
      I(
        "Transform",
        this.body(
          this.add(pe("Position", () => e.position, (r) => e.position = r, t, { step: 0.01, precision: 3 })),
          e.type === "area" || e.type === "sun" ? this.add(pe("Rotation", () => e.rotation, (r) => e.rotation = r, t, { step: 0.5, precision: 1, suffix: "°" })) : null,
          h(
            "div",
            { class: "pt-actions" },
            h("button", { type: "button", class: "pt-btn", onclick: () => this.setLightFollow(!this.viewer.lightFollow) }, P("follow"), "Follow pointer"),
            h("button", { type: "button", class: "pt-btn", onclick: () => this.duplicate(e.id) }, P("copy"), "Duplicate"),
            h("button", { type: "button", class: "pt-btn", onclick: () => this.remove(e.id) }, P("trash"), "Remove")
          )
        )
      )
    ];
  }
  sceneInspector() {
    const e = this.scene, t = this.hooks(), n = { onInput: t.onInput, onCommit: () => (this.commit(), this.renderInspector()) }, i = e.environment, a = te(
      "Resolution",
      [
        { value: "1", label: "Full" },
        { value: "0.75", label: "75%" },
        { value: "0.5", label: "50%" },
        { value: "0.35", label: "35%" }
      ],
      () => String(this.viewer.resolutionScale),
      (o) => {
        this.viewer.resolutionScale = Number(o), this.viewer.fit();
      },
      { onInput: () => {
      }, onCommit: () => {
      } }
    );
    return [
      this.head("scene", e.name, "Scene"),
      I("Scene", this.body(this.add(ue("Name", () => e.name, (o) => e.name = o, n)))),
      I(
        "Camera",
        this.body(
          this.add(k("Field of view", () => e.camera.fov, (o) => e.camera.fov = o, t, { min: 5, max: 150, step: 0.5, precision: 1, suffix: "°" })),
          this.add(k("Aperture", () => e.camera.aperture, (o) => e.camera.aperture = o, t, { min: 0, max: 0.5, step: 2e-3, precision: 3 })),
          this.add(k("Focus dist.", () => e.camera.focusDistance, (o) => e.camera.focusDistance = o, t, { min: 0, step: 0.01, precision: 3 })),
          h("p", { class: "pt-note" }, "Aperture above 0 enables depth of field. Focus distance 0 focuses on the orbit target; Alt + click a surface to focus on it.")
        )
      ),
      I(
        "Environment",
        this.body(
          this.add(te("Background", [{ value: "color", label: "Color" }, { value: "sky", label: "Sky gradient" }], () => i.type, (o) => i.type = o, n)),
          ...i.type === "color" ? [this.add(G("Color", () => i.color, (o) => i.color = o, t))] : [
            this.add(G("Zenith", () => i.zenith, (o) => i.zenith = o, t)),
            this.add(G("Horizon", () => i.horizon, (o) => i.horizon = o, t)),
            this.add(G("Ground", () => i.ground, (o) => i.ground = o, t))
          ],
          this.add(k("Intensity", () => i.intensity, (o) => i.intensity = o, t, { min: 0, max: 100, step: 0.01, precision: 2 }))
        )
      ),
      I(
        "Render",
        this.body(
          this.add(k("Exposure", () => e.render.exposure, (o) => e.render.exposure = o, t, { min: -6, max: 6, step: 0.05, precision: 2, suffix: " EV" })),
          this.add(te("Tone mapping", ft.map((o) => ({ value: o, label: o === "aces" ? "ACES" : o === "reinhard" ? "Reinhard" : "Linear (clip)" })), () => e.render.toneMapping, (o) => e.render.toneMapping = o, t)),
          this.add(k("Bounces", () => e.render.maxBounces, (o) => e.render.maxBounces = Math.round(o), t, { min: 1, max: 32, step: 1, precision: 0 })),
          this.add(k("Max samples", () => e.render.maxSamples, (o) => e.render.maxSamples = Math.round(o), t, { min: 0, max: 1e6, step: 16, precision: 0 })),
          this.add(k("Firefly clamp", () => e.render.clamp, (o) => e.render.clamp = o, t, { min: 0, max: 1e3, step: 0.5, precision: 1 })),
          this.add(a),
          h("p", { class: "pt-note" }, "Max samples 0 refines forever. A lower firefly clamp converges faster but darkens caustics. Press ? for keyboard shortcuts.")
        )
      )
    ];
  }
  /* ============================================================ overlay */
  drawOverlay = () => {
    this.disposed || (this.overlayHandle = requestAnimationFrame(this.drawOverlay), this.gizmo.draw());
  };
}
async function wt(s) {
  const e = s.querySelector('script[type="application/json"]');
  if (e?.textContent?.trim())
    try {
      return A(JSON.parse(e.textContent));
    } catch {
      console.warn("[path-tracer] Invalid inline scene JSON", s);
    }
  const t = s.getAttribute("src");
  if (t) {
    if (t.startsWith("#")) return an(t);
    const i = await fetch(t);
    if (!i.ok) throw new Error(`Could not load ${t} (${i.status})`);
    return A(await i.json());
  }
  const n = s.getAttribute("preset");
  return n ? xe(n) : null;
}
const kn = `
  :host { display: block; position: relative; min-height: 160px; contain: content; background: #000; }
  :host([hidden]) { display: none; }
  .view { position: absolute; inset: 0; }
  .error { position: absolute; inset: 0; display: grid; place-items: center; padding: 16px; color: #ddd; font: 13px system-ui, sans-serif; text-align: center; }
`;
class Tn extends HTMLElement {
  static observedAttributes = ["src", "preset", "controls", "light-follow", "resolution-scale", "max-samples", "exposure"];
  viewer = null;
  pending = null;
  mount;
  loadToken = 0;
  constructor() {
    super();
    const e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
    t.textContent = kn, this.mount = document.createElement("div"), this.mount.className = "view", e.append(t, this.mount);
  }
  /** The live scene (mutations are picked up on the next frame). */
  get scene() {
    return this.viewer?.scene ?? this.pending;
  }
  set scene(e) {
    if (!e) return;
    const t = A(e);
    this.viewer ? this.viewer.setScene(t) : this.pending = t, this.applyAttributes();
  }
  connectedCallback() {
    this.viewer || (this.viewer = new xt(this.mount, { scene: this.pending ?? xe("studio") }), this.viewer.on("frame", (e) => this.dispatchEvent(new CustomEvent("pt-frame", { detail: e }))), this.viewer.on("change", (e) => this.dispatchEvent(new CustomEvent("pt-change", { detail: e }))), this.viewer.on("error", ({ message: e }) => this.showError(e)), this.applyAttributes(), this.pending ? this.dispatchEvent(new CustomEvent("pt-ready")) : this.load());
  }
  disconnectedCallback() {
    queueMicrotask(() => {
      this.isConnected || (this.viewer?.dispose(), this.viewer = null);
    });
  }
  attributeChangedCallback(e) {
    this.viewer && (e === "src" || e === "preset" ? this.load() : this.applyAttributes());
  }
  /** PNG snapshot of the current image. */
  toBlob(e, t) {
    return this.viewer ? this.viewer.toBlob(e, t) : Promise.reject(new Error("Viewer not connected"));
  }
  async load() {
    const e = ++this.loadToken;
    try {
      const t = await wt(this);
      if (e !== this.loadToken || !this.viewer) return;
      t && this.viewer.setScene(t), this.applyAttributes(), this.dispatchEvent(new CustomEvent("pt-ready"));
    } catch (t) {
      this.showError(String(t instanceof Error ? t.message : t));
    }
  }
  applyAttributes() {
    const e = this.viewer;
    if (!e) return;
    e.controls = this.getAttribute("controls") !== "false", e.lightFollow = this.hasAttribute("light-follow") && this.getAttribute("light-follow") !== "false";
    const t = Number(this.getAttribute("resolution-scale"));
    t > 0 && (e.resolutionScale = Math.min(1, Math.max(0.25, t)), e.fit());
    const n = this.getAttribute("max-samples");
    n !== null && Number.isFinite(Number(n)) && (e.scene.render.maxSamples = Math.max(0, Math.round(Number(n))));
    const i = this.getAttribute("exposure");
    i !== null && Number.isFinite(Number(i)) && (e.scene.render.exposure = Number(i));
  }
  showError(e) {
    const t = document.createElement("div");
    t.className = "error", t.textContent = e, this.shadowRoot?.append(t);
  }
}
class Sn extends HTMLElement {
  editor = null;
  pending = null;
  get scene() {
    return this.editor?.scene ?? this.pending;
  }
  set scene(e) {
    if (!e) return;
    const t = A(e);
    this.editor ? this.editor.setScene(t) : this.pending = t;
  }
  connectedCallback() {
    if (this.editor) return;
    this.style.display || (this.style.display = "block"), !this.style.height && this.clientHeight === 0 && (this.style.height = "640px");
    const e = this.getAttribute("storage-key");
    this.editor = new Mn(this, {
      scene: this.pending ?? void 0,
      storageKey: e,
      baseUrl: this.getAttribute("base-url") ?? void 0,
      lightFollow: this.hasAttribute("light-follow")
    }), this.editor.on("change", (n) => this.dispatchEvent(new CustomEvent("pt-change", { detail: n }))), this.editor.on("input", (n) => this.dispatchEvent(new CustomEvent("pt-input", { detail: n }))), this.editor.on("select", (n) => this.dispatchEvent(new CustomEvent("pt-select", { detail: n })));
    const t = !!e && (() => {
      try {
        return localStorage.getItem(e) !== null;
      } catch {
        return !1;
      }
    })();
    !this.pending && !t ? wt(this).then((n) => {
      n && this.editor && this.editor.setScene(n), this.dispatchEvent(new CustomEvent("pt-ready"));
    }) : this.dispatchEvent(new CustomEvent("pt-ready"));
  }
  disconnectedCallback() {
    queueMicrotask(() => {
      this.isConnected || (this.editor?.dispose(), this.editor = null);
    });
  }
}
class En extends HTMLElement {
  static observedAttributes = ["preset", "material", "shape", "samples", "background"];
  canvas;
  _material = null;
  queued = !1;
  constructor() {
    super();
    const e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
    t.textContent = `:host { display: inline-block; width: 128px; aspect-ratio: 1; border-radius: 8px; overflow: hidden; background: #1a1a1a; vertical-align: middle; }
      canvas { display: block; width: 100%; height: 100%; }`, this.canvas = document.createElement("canvas"), this.canvas.setAttribute("role", "img"), e.append(t, this.canvas);
  }
  get material() {
    if (this._material) return this._material;
    const e = this.getAttribute("material");
    if (e)
      try {
        return Je(JSON.parse(e));
      } catch {
        console.warn("[path-tracer] Invalid material JSON", this);
      }
    const t = Ee.find((n) => n.id === this.getAttribute("preset"));
    return t ? { name: t.label, ...t.material } : {};
  }
  set material(e) {
    this._material = e, this.update();
  }
  connectedCallback() {
    this.update();
  }
  attributeChangedCallback() {
    this.update();
  }
  /** Re-renders on the next frame (several changes in a row cost one render). */
  update() {
    this.queued || !this.isConnected || (this.queued = !0, requestAnimationFrame(() => {
      this.queued = !1;
      const e = this.material;
      this.canvas.setAttribute("aria-label", `Material preview: ${e.name ?? "material"}`);
      const t = this.getAttribute("shape");
      Ye(e, this.canvas, {
        samples: Number(this.getAttribute("samples")) || 96,
        shape: t && be.includes(t) ? t : "sphere",
        background: this.getAttribute("background") === "dark" ? "dark" : "studio"
      }).then(() => this.dispatchEvent(new CustomEvent("pt-rendered")));
    }));
  }
}
function Cn(s = "pt") {
  const e = (t, n) => {
    customElements.get(t) || customElements.define(t, n);
  };
  e(`${s}-viewer`, class extends Tn {
  }), e(`${s}-editor`, class extends Sn {
  }), e(`${s}-material-preview`, class extends En {
  });
}
Cn();
export {
  wn as DEFAULT_BASE_URL,
  Y as DEFAULT_CAMERA,
  ee as DEFAULT_ENVIRONMENT,
  mt as DEFAULT_MATERIAL,
  de as DEFAULT_RENDER,
  Mn as Editor,
  U as GLError,
  $e as LIGHT_TYPES,
  Ee as MATERIAL_PRESETS,
  Bt as PATTERNS,
  Sn as PathTracerEditorElement,
  En as PathTracerMaterialPreviewElement,
  Tn as PathTracerViewerElement,
  vt as Renderer,
  Xe as SCENE_PRESETS,
  be as SHAPES,
  ft as TONE_MAPPINGS,
  xt as Viewer,
  B as cameraBasis,
  Ft as cameraRay,
  gt as cloneScene,
  O as createLight,
  y as createMaterial,
  v as createObject,
  Pn as createScene,
  on as decodeScene,
  Cn as defineElements,
  rn as encodeScene,
  j as findItem,
  Wt as findMaterial,
  et as frame,
  Ne as materialFromPreset,
  qt as normalizeLight,
  Je as normalizeMaterial,
  Xt as normalizeObject,
  A as normalizeScene,
  ut as objectBounds,
  Q as orbit,
  _t as pan,
  Nt as projectPoint,
  se as raycast,
  Ye as renderMaterialPreview,
  Ht as sceneBounds,
  an as sceneFromHash,
  xe as scenePreset,
  D as uid,
  Pe as viewTanHalf,
  ke as zoom
};
//# sourceMappingURL=path-tracer.js.map
