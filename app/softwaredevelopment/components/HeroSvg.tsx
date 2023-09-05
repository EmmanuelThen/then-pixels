import React from 'react'

type Props = {}

// mobile viewbox
const isMobile = window.innerWidth <= 768;
const mobileViewBox = '0 0 3000 2500'
const desktopViewBox = '0 0 3000 3000'

const HeroSvg = (props: Props) => {
    return (
        <svg
            className='md:w-[750px] md:h-[750px]'
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 3000 2500"
            viewBox={isMobile ? mobileViewBox : desktopViewBox}
        >
            <rect width="2919.8" height="2442.7" x="40.1" y="28.6" fill="none"></rect>
            <linearGradient id="a" x1="1416.705" x2="782.985" y1="1782.511" y2="2329.95" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#104885">
                </stop>
                <stop offset="1" stop-color="#2986c7">
                </stop>
            </linearGradient>
            <polygon fill="url(#a)" points="2548.1 1713.7 2169.5 1933.7 1492.9 1543 823.2 1932.2 444.7 1713.7 1492.9 1104.5"></polygon><linearGradient id="b" x1="1508.33" x2="1494.528" y1="2328.658" y2="1873.183" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1fa8e5">
            </stop>
                <stop offset="1" stop-color="#2986c7">
                </stop>
            </linearGradient>
            <polygon fill="url(#b)" points="2169.5 1933.7 1499.9 2322.8 823.2 1932.2 1492.9 1543"></polygon><linearGradient id="c" x1="2454.267" x2="1942.531" y1="1779.921" y2="1565.706" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1462be">
            </stop>
                <stop offset="1" stop-color="#0c2c49">
                </stop>
            </linearGradient>
            <polygon fill="url(#c)" points="1492.9 1104.5 1492.9 1543 2169.5 1933.7 2548.1 1713.7"></polygon><linearGradient id="d" x1="1187.949" x2="1129.051" y1="1431.076" y2="2255.642" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7dffec">
            </stop>
                <stop offset="1" stop-color="#2986c7">
                </stop>
            </linearGradient>
            <polygon fill="url(#d)" points="823.2 1278.9 823.2 1932.2 1499.9 2322.8 1499.9 1685.5" opacity=".25"></polygon><linearGradient id="e" x1="1809.83" x2="1812.786" y1="2125.357" y2="1495.85" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7dffec">
            </stop>
                <stop offset="1" stop-color="#2986c7">
                </stop>
            </linearGradient>
            <polygon fill="url(#e)" points="2122.6 1960.9 2122.6 1427.9 1499.9 1685.5 1499.9 2322.8" opacity=".4"></polygon><linearGradient id="f" x1="1845.595" x2="1908.532" y1="601.106" y2="1102.356" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5a5a5b">
            </stop>
                <stop offset=".279" stop-color="#fefcff">
                </stop>
                <stop offset="1" stop-color="#565556">
                </stop>
            </linearGradient>
            <path fill="url(#f)" d="M1415.6,926.3l673,404.6c22,12.8,65.6-0.5,76.7-23.4l171.5-601.2c11.4-23.3,2.8-51.4-19.6-64.4l-669-388.6
					c-27.7-16.1-77-13.3-91,15.5l-156.8,607.4C1391.5,894.2,1398.1,916.1,1415.6,926.3z">
            </path>
            <g opacity=".13"><linearGradient id="g" x1="2417.271" x2="2715.485" y1="1819.44" y2="1819.44" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
            </stop>
                <stop offset="1" stop-color="#313031">
                </stop>
            </linearGradient>
                <path fill="url(#g)" d="M1774.8,1676c-3.3,72.2-208.5,121.1-458.4,109.2s-449.7-80.1-446.3-152.3
						c3.3-72.2,208.5-121.1,458.4-109.2C1578.3,1535.7,1778.1,1603.8,1774.8,1676z" opacity="0">
                </path>
                <linearGradient id="h" x1="2422.784" x2="2714.87" y1="1819.441" y2="1819.441" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#h)" d="M1772.9,1676c-3.3,70.7-204.3,118.6-448.9,107c-244.7-11.6-440.4-78.4-437.2-149.1
						c3.3-70.7,204.3-118.6,448.9-107C1580.5,1538.5,1776.2,1605.2,1772.9,1676z" opacity=".036">
                </path>
                <linearGradient id="i" x1="2428.298" x2="2714.256" y1="1819.442" y2="1819.442" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#i)" d="M1771.1,1675.9c-3.2,69.2-200,116.1-439.5,104.7c-239.6-11.4-431.2-76.8-428-146
						c3.2-69.2,200-116.1,439.5-104.7C1582.6,1541.3,1774.3,1606.6,1771.1,1675.9z" opacity=".071">
                </path>
                <linearGradient id="j" x1="2433.811" x2="2713.641" y1="1819.443" y2="1819.443" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#j)" d="M1769.2,1675.8c-3.1,67.7-195.7,113.6-430.1,102.5c-234.4-11.2-421.9-75.1-418.8-142.9
						c3.1-67.7,195.7-113.6,430.1-102.5C1584.8,1544.1,1772.3,1608,1769.2,1675.8z" opacity=".107">
                </path>
                <linearGradient id="k" x1="2439.325" x2="2713.027" y1="1819.444" y2="1819.444" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#k)" d="M1767.3,1675.7c-3,66.3-191.4,111.1-420.7,100.2S934,1702.4,937,1636.2c3-66.3,191.4-111.1,420.7-100.2
						C1587,1546.9,1770.4,1609.4,1767.3,1675.7z" opacity=".143">
                </path>
                <linearGradient id="l" x1="2444.838" x2="2712.412" y1="1819.445" y2="1819.445" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#l)" d="M1765.5,1675.6c-3,64.8-187.1,108.6-411.3,98s-403.5-71.8-400.5-136.6c3-64.8,187.1-108.6,411.3-98
						C1589.2,1549.6,1768.5,1610.8,1765.5,1675.6z" opacity=".179">
                </path>
                <linearGradient id="m" x1="2450.351" x2="2711.798" y1="1819.445" y2="1819.445" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#m)" d="M1763.6,1675.5c-2.9,63.3-182.8,106.2-401.8,95.7c-219-10.4-394.2-70.2-391.3-133.5
						c2.9-63.3,182.8-106.2,401.8-95.7C1591.3,1552.4,1766.5,1612.2,1763.6,1675.5z" opacity=".214">
                </path>
                <linearGradient id="n" x1="2455.865" x2="2711.183" y1="1819.446" y2="1819.446" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#n)" d="M1761.8,1675.4c-2.8,61.8-178.5,103.7-392.4,93.5s-385-68.5-382.1-130.4c2.8-61.8,178.5-103.7,392.4-93.5
						C1593.5,1555.2,1764.6,1613.6,1761.8,1675.4z" opacity=".25">
                </path>
                <linearGradient id="o" x1="2461.378" x2="2710.569" y1="1819.447" y2="1819.447" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#o)" d="M1759.9,1675.3c-2.8,60.3-174.3,101.2-383,91.2s-375.7-66.9-373-127.2c2.8-60.3,174.3-101.2,383-91.2
						C1595.7,1558,1762.7,1615,1759.9,1675.3z" opacity=".286">
                </path>
                <linearGradient id="p" x1="2466.891" x2="2709.954" y1="1819.448" y2="1819.448" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#p)" d="M1758,1675.2c-2.7,58.8-170,98.7-373.6,89c-203.6-9.7-366.5-65.3-363.8-124.1c2.7-58.8,170-98.7,373.6-89
						C1597.9,1560.8,1760.7,1616.4,1758,1675.2z" opacity=".321">
                </path>
                <linearGradient id="q" x1="2472.405" x2="2709.34" y1="1819.449" y2="1819.449" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#q)" d="M1756.2,1675.2c-2.6,57.4-165.7,96.2-364.2,86.8c-198.5-9.4-357.3-63.6-354.6-121
						c2.6-57.4,165.7-96.2,364.2-86.8C1600,1563.6,1758.8,1617.8,1756.2,1675.2z" opacity=".357">
                </path>
                <linearGradient id="r" x1="2477.918" x2="2708.725" y1="1819.45" y2="1819.45" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#r)" d="M1754.3,1675.1c-2.6,55.9-161.4,93.7-354.8,84.5s-348-62-345.4-117.8c2.6-55.9,161.4-93.7,354.8-84.5
						C1602.2,1566.4,1756.9,1619.2,1754.3,1675.1z" opacity=".393">
                </path>
                <linearGradient id="s" x1="2483.431" x2="2708.111" y1="1819.451" y2="1819.451" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#s)" d="M1752.4,1675c-2.5,54.4-157.1,91.2-345.3,82.3c-188.2-9-338.8-60.3-336.3-114.7
						c2.5-54.4,157.1-91.2,345.3-82.3C1604.4,1569.2,1754.9,1620.6,1752.4,1675z" opacity=".429">
                </path>
                <linearGradient id="t" x1="2488.945" x2="2707.496" y1="1819.451" y2="1819.451" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#t)" d="M1750.6,1674.9c-2.4,52.9-152.8,88.7-335.9,80c-183.1-8.7-329.5-58.7-327.1-111.6
						c2.4-52.9,152.8-88.7,335.9-80C1606.6,1572,1753,1622,1750.6,1674.9z" opacity=".464">
                </path>
                <linearGradient id="u" x1="2494.458" x2="2706.882" y1="1819.453" y2="1819.453" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#u)" d="M1748.7,1674.8c-2.4,51.4-148.5,86.3-326.5,77.8c-178-8.5-320.3-57-317.9-108.5s148.5-86.3,326.5-77.8
						C1608.7,1574.8,1751.1,1623.4,1748.7,1674.8z" opacity=".5">
                </path>
                <linearGradient id="v" x1="2499.971" x2="2706.267" y1="1819.453" y2="1819.453" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#v)" d="M1746.8,1674.7c-2.3,49.9-144.3,83.8-317.1,75.5c-172.8-8.2-311.1-55.4-308.8-105.3
						c2.3-49.9,144.3-83.8,317.1-75.5C1610.9,1577.6,1749.1,1624.8,1746.8,1674.7z" opacity=".536">
                </path>
                <linearGradient id="w" x1="2505.484" x2="2705.653" y1="1819.454" y2="1819.454" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#w)" d="M1745,1674.6c-2.2,48.5-140,81.3-307.7,73.3c-167.7-8-301.8-53.7-299.6-102.2
						c2.2-48.5,140-81.3,307.7-73.3C1613.1,1580.4,1747.2,1626.2,1745,1674.6z" opacity=".571">
                </path>
                <linearGradient id="x" x1="2510.998" x2="2705.039" y1="1819.455" y2="1819.455" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#x)" d="M1743.1,1674.5c-2.2,47-135.7,78.8-298.2,71.1c-162.6-7.7-292.6-52.1-290.4-99.1
						c2.2-47,135.7-78.8,298.2-71.1C1615.3,1583.2,1745.3,1627.6,1743.1,1674.5z" opacity=".607">
                </path>
                <linearGradient id="y" x1="2516.511" x2="2704.424" y1="1819.456" y2="1819.456" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#y)" d="M1741.3,1674.4c-2.1,45.5-131.4,76.3-288.8,68.8c-157.4-7.5-283.3-50.4-281.2-95.9
						c2.1-45.5,131.4-76.3,288.8-68.8C1617.4,1586,1743.3,1628.9,1741.3,1674.4z" opacity=".643">
                </path>
                <linearGradient id="z" x1="2522.024" x2="2703.81" y1="1819.457" y2="1819.457" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#z)" d="M1739.4,1674.4c-2,44-127.1,73.8-279.4,66.6c-152.3-7.2-274.1-48.8-272.1-92.8
						c2-44,127.1-73.8,279.4-66.6C1619.6,1588.8,1741.4,1630.3,1739.4,1674.4z" opacity=".679">
                </path>
                <linearGradient id="A" x1="2527.538" x2="2703.195" y1="1819.458" y2="1819.458" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#A)" d="M1737.5,1674.3c-2,42.5-122.8,71.3-270,64.3s-264.9-47.2-262.9-89.7c2-42.5,122.8-71.3,270-64.3
						S1739.5,1631.7,1737.5,1674.3z" opacity=".714">
                </path>
                <linearGradient id="B" x1="2533.051" x2="2702.581" y1="1819.459" y2="1819.459" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#B)" d="M1735.7,1674.2c-1.9,41-118.5,68.8-260.6,62.1c-142-6.8-255.6-45.5-253.7-86.6
						c1.9-41,118.5-68.8,260.6-62.1C1623.9,1594.4,1737.5,1633.1,1735.7,1674.2z" opacity=".75">
                </path>
                <linearGradient id="C" x1="2538.564" x2="2701.966" y1="1819.46" y2="1819.46" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#C)" d="M1733.8,1674.1c-1.8,39.6-114.3,66.3-251.2,59.8c-136.9-6.5-246.4-43.9-244.6-83.4
						c1.8-39.6,114.3-66.3,251.2-59.8C1626.1,1597.2,1735.6,1634.5,1733.8,1674.1z" opacity=".786">
                </path>
                <linearGradient id="D" x1="2544.078" x2="2701.352" y1="1819.46" y2="1819.46" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#D)" d="M1731.9,1674c-1.8,38.1-110,63.9-241.7,57.6c-131.8-6.3-237.1-42.2-235.4-80.3
						c1.8-38.1,110-63.9,241.7-57.6C1628.3,1600,1733.7,1635.9,1731.9,1674z" opacity=".821">
                </path>
                <linearGradient id="E" x1="2549.591" x2="2700.737" y1="1819.461" y2="1819.461" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#E)" d="M1730.1,1673.9c-1.7,36.6-105.7,61.4-232.3,55.3c-126.6-6-227.9-40.6-226.2-77.2
						c1.7-36.6,105.7-61.4,232.3-55.3S1731.8,1637.3,1730.1,1673.9z" opacity=".857">
                </path>
                <linearGradient id="F" x1="2555.104" x2="2700.123" y1="1819.462" y2="1819.462" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#F)" d="M1728.2,1673.8c-1.6,35.1-101.4,58.9-222.9,53.1c-121.5-5.8-218.7-38.9-217-74
						c1.6-35.1,101.4-58.9,222.9-53.1C1632.6,1605.6,1729.8,1638.7,1728.2,1673.8z" opacity=".893">
                </path>
                <linearGradient id="G" x1="2560.618" x2="2699.508" y1="1819.463" y2="1819.463" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#G)" d="M1726.3,1673.7c-1.5,33.6-97.1,56.4-213.5,50.9c-116.4-5.5-209.4-37.3-207.9-70.9
						c1.5-33.6,97.1-56.4,213.5-50.9C1634.8,1608.4,1727.9,1640.1,1726.3,1673.7z" opacity=".929">
                </path>
                <linearGradient id="H" x1="2566.131" x2="2698.894" y1="1819.464" y2="1819.464" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#H)" d="M1724.5,1673.6c-1.5,32.1-92.8,53.9-204.1,48.6c-111.2-5.3-200.2-35.6-198.7-67.8
						c1.5-32.1,92.8-53.9,204.1-48.6S1726,1641.5,1724.5,1673.6z" opacity=".964">
                </path>
                <linearGradient id="I" x1="2571.644" x2="2698.279" y1="1819.465" y2="1819.465" gradientTransform="matrix(3.0338 .1426 -.238 5.0629 -6030.302 -7923.024)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
                </stop>
                    <stop offset="1" stop-color="#313031">
                    </stop>
                </linearGradient>
                <path fill="url(#I)" d="M1722.6,1673.6c-1.4,30.7-88.6,51.4-194.6,46.4c-106.1-5-190.9-34-189.5-64.7
						c1.4-30.7,88.6-51.4,194.6-46.4C1639.2,1613.9,1724,1642.9,1722.6,1673.6z">
                </path>
            </g><linearGradient id="J" x1="1909.148" x2="1296.85" y1="1348.315" y2="1348.315" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1462be">
            </stop>
                <stop offset="1" stop-color="#40b7f0">
                </stop>
            </linearGradient>
            <path fill="url(#J)" d="M2098.6,1379.9l-687.9-398.4c-32.3-18.7-71.9-18.7-104.2,0l-457.2,264.4c-26.8,15.5-26.9,54.8,0,70.4
					l690.8,400.1c29.7,17.2,66.1,17.2,95.7,0l462.8-267.6C2124.8,1433.6,2124.8,1395.1,2098.6,1379.9z">
            </path>
            <linearGradient id="K" x1="1912.06" x2="1295.409" y1="1346.879" y2="1346.879" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#efefef">
            </stop>
                <stop offset="1" stop-color="#fdfdfd">
                </stop>
            </linearGradient>
            <path fill="url(#K)" d="M2106.5,1342.3L1410.6,980c-32.3-18.7-71.9-18.7-104.2,0l-465.8,228.7c-26.8,15.5-18.3,90.5,8.5,106.1
					l690.8,400.1c29.7,17.2,66.1,17.2,95.7,0l462.8-267.6C2124.8,1432.1,2132.7,1357.5,2106.5,1342.3z">
            </path>
            <linearGradient id="L" x1="829.097" x2="2118.228" y1="1304.593" y2="1304.593" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#efefef">
            </stop>
                <stop offset="1" stop-color="#fdfdfd">
                </stop>
            </linearGradient>
            <path fill="url(#L)" d="M2098.6,1336.2l-687.9-398.4c-32.3-18.7-71.9-18.7-104.2,0l-457.2,264.4c-26.8,15.5-26.9,54.8,0,70.4
					l690.8,400.1c29.7,17.2,66.1,17.2,95.7,0l462.8-267.6C2124.8,1389.9,2124.8,1351.4,2098.6,1336.2z">
            </path>
            <linearGradient id="M" x1="1314.648" x2="1400.192" y1="999.541" y2="999.541" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#M)" d="M1399.3,996.2l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1400,1005.1,1401,997.2,1399.3,996.2z">
            </path>
            <linearGradient id="N" x1="1889.963" x2="1009.517" y1="1007.49" y2="983.533" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#N)" d="M1398.3,995.1l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1400,998.6,1400,996.1,1398.3,995.1z">
            </path>
            <linearGradient id="O" x1="1377.666" x2="1463.21" y1="1036.157" y2="1036.157" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#O)" d="M1462.3,1032.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1463,1041.7,1464,1033.8,1462.3,1032.8z">
            </path>
            <linearGradient id="P" x1="1889.027" x2="1008.582" y1="1042.366" y2="1018.408" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#P)" d="M1461.3,1031.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1463,1035.2,1463,1032.7,1461.3,1031.7z">
            </path>
            <linearGradient id="Q" x1="1440.684" x2="1526.228" y1="1072.773" y2="1072.773" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#Q)" d="M1525.3,1069.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1526,1078.4,1527.1,1070.4,1525.3,1069.4z">
            </path>
            <linearGradient id="R" x1="1888.092" x2="1007.646" y1="1077.242" y2="1053.284" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#R)" d="M1524.3,1068.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1526,1071.8,1526,1069.3,1524.3,1068.3z">
            </path>
            <linearGradient id="S" x1="1503.702" x2="1589.246" y1="1109.389" y2="1109.389" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#S)" d="M1588.4,1106.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1589.1,1115,1590.1,1107.1,1588.4,1106.1z">
            </path>
            <linearGradient id="T" x1="1887.156" x2="1006.71" y1="1112.118" y2="1088.16" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#T)" d="M1587.3,1104.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1589.1,1108.4,1589.1,1105.9,1587.3,1104.9z">
            </path>
            <linearGradient id="U" x1="1566.72" x2="1652.264" y1="1146.005" y2="1146.005" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#U)" d="M1651.4,1142.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1652.1,1151.6,1653.1,1143.7,1651.4,1142.7z">
            </path>
            <linearGradient id="V" x1="1886.22" x2="1005.775" y1="1146.993" y2="1123.035" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#V)" d="M1650.4,1141.5l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1652.1,1145,1652.1,1142.5,1650.4,1141.5z">
            </path>
            <linearGradient id="W" x1="1629.738" x2="1715.283" y1="1182.621" y2="1182.621" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#W)" d="M1714.4,1179.3l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1715.1,1188.2,1716.1,1180.3,1714.4,1179.3z">
            </path>
            <linearGradient id="X" x1="1885.285" x2="1004.839" y1="1181.869" y2="1157.911" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#X)" d="M1713.4,1178.1l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1715.1,1181.7,1715.1,1179.1,1713.4,1178.1z">
            </path>
            <linearGradient id="Y" x1="1692.756" x2="1778.301" y1="1219.237" y2="1219.237" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#Y)" d="M1777.4,1215.9l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1778.1,1224.8,1779.1,1216.9,1777.4,1215.9z">
            </path>
            <linearGradient id="Z" x1="1884.349" x2="1003.904" y1="1216.745" y2="1192.787" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#Z)" d="M1776.4,1214.8l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1778.1,1218.3,1778.1,1215.8,1776.4,1214.8z">
            </path>
            <linearGradient id="aa" x1="1755.774" x2="1841.319" y1="1255.853" y2="1255.853" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
            <path fill="url(#aa)" d="M1840.4,1252.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1841.1,1261.4,1842.2,1253.5,1840.4,1252.5z">
            </path>
            <linearGradient id="ab" x1="1887.444" x2="1550.697" y1="1209.497" y2="1360.042" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#bfbdbe">
                </stop>
            </linearGradient>
            <path fill="url(#ab)" d="M1839.4,1251.4l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1841.1,1254.9,1841.1,1252.4,1839.4,1251.4z">
            </path>
            <g><linearGradient id="ac" x1="1818.792" x2="1904.337" y1="1292.469" y2="1292.469" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
                <path fill="url(#ac)" d="M1903.5,1289.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1904.1,1298.1,1905.2,1290.1,1903.5,1289.1z">
                </path>
                <linearGradient id="ad" x1="1882.478" x2="1002.033" y1="1286.496" y2="1262.538" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#ad)" d="M1902.4,1288l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1904.1,1291.5,1904.1,1289,1902.4,1288z">
                </path>
            </g><g><linearGradient id="ae" x1="1881.81" x2="1967.355" y1="1329.085" y2="1329.085" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
                <path fill="url(#ae)" d="M1966.5,1325.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1967.2,1334.7,1968.2,1326.8,1966.5,1325.8z">
                </path>
                <linearGradient id="af" x1="1881.543" x2="1001.097" y1="1321.372" y2="1297.414" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#af)" d="M1965.4,1324.6l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1967.2,1328.1,1967.2,1325.6,1965.4,1324.6z">
                </path>
            </g><g><linearGradient id="ag" x1="1944.829" x2="2030.373" y1="1365.7" y2="1365.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
                <path fill="url(#ag)" d="M2029.5,1362.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C2030.2,1371.3,2031.2,1363.4,2029.5,1362.4z">
                </path>
                <linearGradient id="ah" x1="1880.607" x2="1000.162" y1="1356.247" y2="1332.29" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#ah)" d="M2028.5,1361.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C2030.2,1364.7,2030.2,1362.2,2028.5,1361.2z">
                </path>
            </g><g><linearGradient id="ai" x1="1264.629" x2="1350.173" y1="1028.198" y2="1028.198" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
            </stop>
                <stop offset="1" stop-color="#3f3d3d">
                </stop>
            </linearGradient>
                <path fill="url(#ai)" d="M1349.3,1024.9l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1350,1033.8,1351,1025.9,1349.3,1024.9z">
                </path>
                <linearGradient id="aj" x1="1889.162" x2="1008.716" y1="1037.486" y2="1013.529" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#aj)" d="M1348.3,1023.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1350,1027.2,1350,1024.7,1348.3,1023.7z">
                </path>
                <linearGradient id="ak" x1="1327.647" x2="1413.191" y1="1064.814" y2="1064.814" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#ak)" d="M1412.3,1061.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1413,1070.4,1414,1062.5,1412.3,1061.5z">
                </path>
                <linearGradient id="al" x1="1888.226" x2="1007.781" y1="1072.362" y2="1048.404" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#al)" d="M1411.3,1060.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1413,1063.9,1413,1061.3,1411.3,1060.3z">
                </path>
                <linearGradient id="am" x1="1390.665" x2="1476.209" y1="1101.43" y2="1101.43" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#am)" d="M1475.3,1098.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1476,1107,1477,1099.1,1475.3,1098.1z">
                </path>
                <linearGradient id="an" x1="1887.291" x2="1006.845" y1="1107.237" y2="1083.28" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#an)" d="M1474.3,1097l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1476,1100.5,1476,1098,1474.3,1097z">
                </path>
                <linearGradient id="ao" x1="1453.683" x2="1539.227" y1="1138.045" y2="1138.045" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#ao)" d="M1538.3,1134.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1539,1143.6,1540.1,1135.7,1538.3,1134.7z">
                </path>
                <linearGradient id="ap" x1="1886.355" x2="1005.909" y1="1142.113" y2="1118.156" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#ap)" d="M1537.3,1133.6l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1539,1137.1,1539,1134.6,1537.3,1133.6z">
                </path>
                <linearGradient id="aq" x1="1516.701" x2="1602.246" y1="1174.661" y2="1174.661" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#aq)" d="M1601.4,1171.3l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1602,1180.2,1603.1,1172.3,1601.4,1171.3z">
                </path>
                <linearGradient id="ar" x1="1885.419" x2="1004.974" y1="1176.989" y2="1153.031" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#ar)" d="M1600.3,1170.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1602,1173.7,1602.1,1171.2,1600.3,1170.2z">
                </path>
                <g><linearGradient id="as" x1="1579.719" x2="1665.264" y1="1211.277" y2="1211.277" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#as)" d="M1664.4,1208l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1665.1,1216.9,1666.1,1208.9,1664.4,1208z">
                    </path>
                    <linearGradient id="at" x1="1884.484" x2="1004.038" y1="1211.865" y2="1187.907" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#at)" d="M1663.4,1206.8l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1665.1,1210.3,1665.1,1207.8,1663.4,1206.8z">
                    </path>
                </g><g><linearGradient id="au" x1="1642.737" x2="1728.282" y1="1247.893" y2="1247.893" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#au)" d="M1727.4,1244.6l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1728.1,1253.5,1729.1,1245.6,1727.4,1244.6z">
                    </path>
                    <linearGradient id="av" x1="1883.548" x2="1003.103" y1="1246.74" y2="1222.783" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#av)" d="M1726.4,1243.4l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1728.1,1246.9,1728.1,1244.4,1726.4,1243.4z">
                    </path>
                </g><g><linearGradient id="aw" x1="1705.755" x2="1791.3" y1="1284.509" y2="1284.509" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aw)" d="M1790.4,1281.2l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1791.1,1290.1,1792.1,1282.2,1790.4,1281.2z">
                    </path>
                    <linearGradient id="ax" x1="1882.613" x2="1002.167" y1="1281.616" y2="1257.658" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#ax)" d="M1789.4,1280l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1791.1,1283.5,1791.1,1281,1789.4,1280z">
                    </path>
                </g><g><linearGradient id="ay" x1="1768.773" x2="1854.318" y1="1321.125" y2="1321.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#ay)" d="M1853.4,1317.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1854.1,1326.7,1855.2,1318.8,1853.4,1317.8z">
                    </path>
                    <linearGradient id="az" x1="1881.677" x2="1001.232" y1="1316.492" y2="1292.534" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#az)" d="M1852.4,1316.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1854.1,1320.2,1854.1,1317.6,1852.4,1316.7z">
                    </path>
                </g><g><linearGradient id="aA" x1="1831.792" x2="1917.336" y1="1357.741" y2="1357.741" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aA)" d="M1916.5,1354.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1917.1,1363.3,1918.2,1355.4,1916.5,1354.4z">
                    </path>
                    <linearGradient id="aB" x1="1880.742" x2="1000.296" y1="1351.367" y2="1327.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aB)" d="M1915.4,1353.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1917.1,1356.8,1917.1,1354.3,1915.4,1353.3z">
                    </path>
                </g><g><linearGradient id="aC" x1="1894.81" x2="1980.354" y1="1394.357" y2="1394.357" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aC)" d="M1979.5,1391l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1980.2,1399.9,1981.2,1392,1979.5,1391z">
                    </path>
                    <linearGradient id="aD" x1="1879.806" x2="999.361" y1="1386.243" y2="1362.285" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aD)" d="M1978.4,1389.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1980.2,1393.4,1980.2,1390.9,1978.4,1389.9z">
                    </path>
                </g></g><g><linearGradient id="aE" x1="1214.61" x2="1300.154" y1="1056.854" y2="1056.854" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#aE)" d="M1299.3,1053.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1300,1062.4,1301,1054.5,1299.3,1053.5z">
                </path>
                <linearGradient id="aF" x1="1888.361" x2="1007.915" y1="1067.482" y2="1043.524" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#aF)" d="M1298.2,1052.4l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1300,1055.9,1300,1053.4,1298.2,1052.4z">
                </path>
                <linearGradient id="aG" x1="1277.628" x2="1363.172" y1="1093.47" y2="1093.47" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#aG)" d="M1362.3,1090.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1363,1099.1,1364,1091.1,1362.3,1090.1z">
                </path>
                <linearGradient id="aH" x1="1887.425" x2="1006.98" y1="1102.358" y2="1078.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#aH)" d="M1361.3,1089l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1363,1092.5,1363,1090,1361.3,1089z">
                </path>
                <linearGradient id="aI" x1="1340.646" x2="1426.19" y1="1130.086" y2="1130.086" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#aI)" d="M1425.3,1126.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1426,1135.7,1427,1127.8,1425.3,1126.8z">
                </path>
                <linearGradient id="aJ" x1="1886.489" x2="1006.044" y1="1137.233" y2="1113.276" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#aJ)" d="M1424.3,1125.6l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1426,1129.1,1426,1126.6,1424.3,1125.6z">
                </path>
                <linearGradient id="aK" x1="1403.664" x2="1489.208" y1="1166.702" y2="1166.702" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#aK)" d="M1488.3,1163.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1489,1172.3,1490,1164.4,1488.3,1163.4z">
                </path>
                <linearGradient id="aL" x1="1885.554" x2="1005.109" y1="1172.109" y2="1148.151" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#aL)" d="M1487.3,1162.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1489,1165.7,1489,1163.2,1487.3,1162.2z">
                </path>
                <linearGradient id="aM" x1="1466.682" x2="1552.227" y1="1203.318" y2="1203.318" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#aM)" d="M1551.3,1200l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1552,1208.9,1553.1,1201,1551.3,1200z">
                </path>
                <linearGradient id="aN" x1="1884.618" x2="1004.173" y1="1206.985" y2="1183.027" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#aN)" d="M1550.3,1198.8l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1552,1202.4,1552,1199.8,1550.3,1198.8z">
                </path>
                <g><linearGradient id="aO" x1="1529.7" x2="1615.245" y1="1239.934" y2="1239.934" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aO)" d="M1614.4,1236.6l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1615,1245.5,1616.1,1237.6,1614.4,1236.6z">
                    </path>
                    <linearGradient id="aP" x1="1883.683" x2="1003.237" y1="1241.86" y2="1217.903" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aP)" d="M1613.3,1235.5l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1615,1239,1615,1236.5,1613.3,1235.5z">
                    </path>
                </g><g><linearGradient id="aQ" x1="1592.718" x2="1678.263" y1="1276.55" y2="1276.55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aQ)" d="M1677.4,1273.2l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1678.1,1282.1,1679.1,1274.2,1677.4,1273.2z">
                    </path>
                    <linearGradient id="aR" x1="1882.747" x2="1002.302" y1="1276.736" y2="1252.778" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aR)" d="M1676.3,1272.1l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1678.1,1275.6,1678.1,1273.1,1676.3,1272.1z">
                    </path>
                </g><g><linearGradient id="aS" x1="1655.736" x2="1741.281" y1="1313.166" y2="1313.166" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aS)" d="M1740.4,1309.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1741.1,1318.8,1742.1,1310.8,1740.4,1309.8z">
                    </path>
                    <linearGradient id="aT" x1="1881.812" x2="1001.366" y1="1311.612" y2="1287.654" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aT)" d="M1739.4,1308.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1741.1,1312.2,1741.1,1309.7,1739.4,1308.7z">
                    </path>
                </g><g><linearGradient id="aU" x1="1718.755" x2="1804.299" y1="1349.782" y2="1349.782" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aU)" d="M1803.4,1346.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1804.1,1355.4,1805.1,1347.5,1803.4,1346.5z">
                    </path>
                    <linearGradient id="aV" x1="1880.876" x2="1000.431" y1="1346.487" y2="1322.53" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aV)" d="M1802.4,1345.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1804.1,1348.8,1804.1,1346.3,1802.4,1345.3z">
                    </path>
                </g><g><linearGradient id="aW" x1="1781.773" x2="1867.317" y1="1386.398" y2="1386.398" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aW)" d="M1866.4,1383.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1867.1,1392,1868.2,1384.1,1866.4,1383.1z">
                    </path>
                    <linearGradient id="aX" x1="1879.941" x2="999.495" y1="1381.363" y2="1357.405" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aX)" d="M1865.4,1381.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1867.1,1385.4,1867.1,1382.9,1865.4,1381.9z">
                    </path>
                </g><g><linearGradient id="aY" x1="1844.791" x2="1930.335" y1="1423.013" y2="1423.013" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#aY)" d="M1929.5,1419.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1930.1,1428.6,1931.2,1420.7,1929.5,1419.7z">
                    </path>
                    <linearGradient id="aZ" x1="1879.005" x2="998.56" y1="1416.239" y2="1392.281" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#aZ)" d="M1928.4,1418.5l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1930.1,1422.1,1930.1,1419.5,1928.4,1418.5z">
                    </path>
                </g></g><g><linearGradient id="ba" x1="1164.591" x2="1250.135" y1="1085.511" y2="1085.511" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#ba)" d="M1249.3,1082.2l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1249.9,1091.1,1251,1083.2,1249.3,1082.2z">
                </path>
                <linearGradient id="bb" x1="1887.56" x2="1007.114" y1="1097.478" y2="1073.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bb)" d="M1248.2,1081l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1249.9,1084.6,1249.9,1082,1248.2,1081z">
                </path>
                <linearGradient id="bc" x1="1227.609" x2="1313.153" y1="1122.127" y2="1122.127" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bc)" d="M1312.3,1118.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1313,1127.7,1314,1119.8,1312.3,1118.8z">
                </path>
                <linearGradient id="bd" x1="1886.624" x2="1006.179" y1="1132.353" y2="1108.396" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bd)" d="M1311.2,1117.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1313,1121.2,1313,1118.6,1311.2,1117.7z">
                </path>
                <linearGradient id="be" x1="1290.627" x2="1376.171" y1="1158.742" y2="1158.742" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#be)" d="M1375.3,1155.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1376,1164.3,1377,1156.4,1375.3,1155.4z">
                </path>
                <linearGradient id="bf" x1="1885.689" x2="1005.243" y1="1167.229" y2="1143.271" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bf)" d="M1374.3,1154.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1376,1157.8,1376,1155.3,1374.3,1154.3z">
                </path>
                <linearGradient id="bg" x1="1353.645" x2="1439.19" y1="1195.358" y2="1195.358" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bg)" d="M1438.3,1192l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1439,1200.9,1440,1193,1438.3,1192z">
                </path>
                <linearGradient id="bh" x1="1884.753" x2="1004.308" y1="1202.105" y2="1178.147" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bh)" d="M1437.3,1190.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1439,1194.4,1439,1191.9,1437.3,1190.9z">
                </path>
                <linearGradient id="bi" x1="1416.663" x2="1502.208" y1="1231.974" y2="1231.974" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bi)" d="M1501.3,1228.6l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1502,1237.6,1503,1229.6,1501.3,1228.6z">
                </path>
                <linearGradient id="bj" x1="1883.818" x2="1003.372" y1="1236.98" y2="1213.023" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bj)" d="M1500.3,1227.5l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1502,1231,1502,1228.5,1500.3,1227.5z">
                </path>
                <g><linearGradient id="bk" x1="1479.681" x2="1565.226" y1="1268.59" y2="1268.59" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bk)" d="M1564.3,1265.3l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1565,1274.2,1566.1,1266.3,1564.3,1265.3z">
                    </path>
                    <linearGradient id="bl" x1="1882.882" x2="1002.436" y1="1271.856" y2="1247.898" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bl)" d="M1563.3,1264.1l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1565,1267.6,1565,1265.1,1563.3,1264.1z">
                    </path>
                    <g opacity=".64"><linearGradient id="bm" x1="2504.966" x2="-478.54" y1="1408.849" y2="1327.665" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                        <path fill="url(#bm)" d="M1422.1,1382.6l-152.7-88.4c-7.2-4.2-16-4.2-23.1,0l-101.5,58.7c-6,3.4-6,12.2,0,15.6l153.3,88.8
									c6.6,3.8,14.7,3.8,21.2,0l102.7-59.4C1427.9,1394.5,1427.9,1386,1422.1,1382.6z">
                        </path>
                    </g></g><g><linearGradient id="bn" x1="1542.699" x2="1628.244" y1="1305.206" y2="1305.206" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#3f3d3d">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bn)" d="M1627.4,1301.9l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1628,1310.8,1629.1,1302.9,1627.4,1301.9z">
                    </path>
                    <linearGradient id="bo" x1="1881.946" x2="1001.501" y1="1306.732" y2="1282.774" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bo)" d="M1626.3,1300.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1628,1304.2,1628,1301.7,1626.3,1300.7z">
                    </path>
                </g><g><linearGradient id="bp" x1="1605.717" x2="1691.262" y1="1341.822" y2="1341.822" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bp)" d="M1690.4,1338.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1691.1,1347.4,1692.1,1339.5,1690.4,1338.5z">
                    </path>
                    <linearGradient id="bq" x1="1881.011" x2="1000.565" y1="1341.608" y2="1317.65" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bq)" d="M1689.3,1337.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1691.1,1340.9,1691.1,1338.3,1689.3,1337.3z">
                    </path>
                </g><g><linearGradient id="br" x1="1668.736" x2="1754.28" y1="1378.438" y2="1378.438" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#br)" d="M1753.4,1375.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1754.1,1384,1755.1,1376.1,1753.4,1375.1z">
                    </path>
                    <linearGradient id="bs" x1="1880.075" x2="999.63" y1="1376.483" y2="1352.525" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bs)" d="M1752.4,1374l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1754.1,1377.5,1754.1,1375,1752.4,1374z">
                    </path>
                </g><g><linearGradient id="bt" x1="1731.754" x2="1817.298" y1="1415.054" y2="1415.054" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bt)" d="M1816.4,1411.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1817.1,1420.6,1818.1,1412.7,1816.4,1411.7z">
                    </path>
                    <linearGradient id="bu" x1="1879.14" x2="998.694" y1="1411.359" y2="1387.401" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bu)" d="M1815.4,1410.6l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1817.1,1414.1,1817.1,1411.6,1815.4,1410.6z">
                    </path>
                </g><g><linearGradient id="bv" x1="1794.772" x2="1880.316" y1="1451.67" y2="1451.67" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bv)" d="M1879.4,1448.3l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1880.1,1457.3,1881.2,1449.3,1879.4,1448.3z">
                    </path>
                    <linearGradient id="bw" x1="1878.204" x2="997.759" y1="1446.235" y2="1422.277" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bw)" d="M1878.4,1447.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1880.1,1450.7,1880.1,1448.2,1878.4,1447.2z">
                    </path>
                </g></g><g><linearGradient id="bx" x1="1114.572" x2="1200.116" y1="1114.167" y2="1114.167" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bx)" d="M1199.2,1110.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1199.9,1119.8,1201,1111.8,1199.2,1110.8z">
                </path>
                <linearGradient id="by" x1="1886.759" x2="1006.313" y1="1127.473" y2="1103.516" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#by)" d="M1198.2,1109.7l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1199.9,1113.2,1199.9,1110.7,1198.2,1109.7z">
                </path>
                <linearGradient id="bz" x1="1177.59" x2="1263.134" y1="1150.783" y2="1150.783" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bz)" d="M1262.3,1147.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1262.9,1156.4,1264,1148.5,1262.3,1147.5z">
                </path>
                <linearGradient id="bA" x1="1885.823" x2="1005.378" y1="1162.349" y2="1138.391" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bA)" d="M1261.2,1146.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1262.9,1149.8,1262.9,1147.3,1261.2,1146.3z">
                </path>
                <linearGradient id="bB" x1="1240.608" x2="1326.153" y1="1187.399" y2="1187.399" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bB)" d="M1325.3,1184.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1326,1193,1327,1185.1,1325.3,1184.1z">
                </path>
                <linearGradient id="bC" x1="1884.888" x2="1004.442" y1="1197.225" y2="1173.267" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bC)" d="M1324.2,1182.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1326,1186.4,1326,1183.9,1324.2,1182.9z">
                </path>
                <linearGradient id="bD" x1="1303.626" x2="1389.171" y1="1224.015" y2="1224.015" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bD)" d="M1388.3,1220.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1389,1229.6,1390,1221.7,1388.3,1220.7z">
                </path>
                <linearGradient id="bE" x1="1883.952" x2="1003.506" y1="1232.101" y2="1208.143" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bE)" d="M1387.3,1219.5l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1389,1223.1,1389,1220.5,1387.3,1219.5z">
                </path>
                <linearGradient id="bF" x1="1366.644" x2="1452.189" y1="1260.631" y2="1260.631" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bF)" d="M1451.3,1257.3l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1452,1266.2,1453,1258.3,1451.3,1257.3z">
                </path>
                <linearGradient id="bG" x1="1883.016" x2="1002.571" y1="1266.976" y2="1243.018" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bG)" d="M1450.3,1256.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1452,1259.7,1452,1257.2,1450.3,1256.2z">
                </path>
                <g><linearGradient id="bH" x1="1429.662" x2="1515.207" y1="1297.247" y2="1297.247" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bH)" d="M1514.3,1293.9l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1515,1302.8,1516,1294.9,1514.3,1293.9z">
                    </path>
                    <linearGradient id="bI" x1="1882.081" x2="1001.635" y1="1301.852" y2="1277.894" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bI)" d="M1513.3,1292.8l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1515,1296.3,1515,1293.8,1513.3,1292.8z">
                    </path>
                </g><g><linearGradient id="bJ" x1="1492.68" x2="1578.225" y1="1333.863" y2="1333.863" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bJ)" d="M1577.3,1330.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1578,1339.4,1579.1,1331.5,1577.3,1330.5z">
                    </path>
                    <linearGradient id="bK" x1="1881.145" x2="1000.7" y1="1336.727" y2="1312.77" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bK)" d="M1576.3,1329.4l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1578,1332.9,1578,1330.4,1576.3,1329.4z">
                    </path>
                </g><g><linearGradient id="bL" x1="1555.698" x2="1641.243" y1="1370.478" y2="1370.478" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bL)" d="M1640.4,1367.2l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1641,1376.1,1642.1,1368.1,1640.4,1367.2z">
                    </path>
                    <linearGradient id="bM" x1="1880.21" x2="999.764" y1="1371.603" y2="1347.646" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bM)" d="M1639.3,1366l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1641,1369.5,1641,1367,1639.3,1366z">
                    </path>
                </g><g><linearGradient id="bN" x1="1618.717" x2="1704.261" y1="1407.094" y2="1407.094" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bN)" d="M1703.4,1403.8l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1704.1,1412.7,1705.1,1404.8,1703.4,1403.8z">
                    </path>
                    <linearGradient id="bO" x1="1879.274" x2="998.829" y1="1406.479" y2="1382.521" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bO)" d="M1702.3,1402.6l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1704.1,1406.1,1704.1,1403.6,1702.3,1402.6z">
                    </path>
                </g><g><linearGradient id="bP" x1="1681.735" x2="1767.279" y1="1443.71" y2="1443.71" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bP)" d="M1766.4,1440.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1767.1,1449.3,1768.1,1441.4,1766.4,1440.4z">
                    </path>
                    <linearGradient id="bQ" x1="1878.339" x2="997.893" y1="1441.355" y2="1417.397" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bQ)" d="M1765.4,1439.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1767.1,1442.8,1767.1,1440.2,1765.4,1439.2z">
                    </path>
                </g><g><linearGradient id="bR" x1="1744.753" x2="1830.297" y1="1480.326" y2="1480.326" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#bR)" d="M1829.4,1477l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1830.1,1485.9,1831.1,1478,1829.4,1477z">
                    </path>
                    <linearGradient id="bS" x1="1877.403" x2="996.958" y1="1476.23" y2="1452.273" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#bS)" d="M1828.4,1475.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1830.1,1479.4,1830.1,1476.8,1828.4,1475.9z">
                    </path>
                </g></g><g><linearGradient id="bT" x1="1064.553" x2="1150.097" y1="1142.823" y2="1142.823" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bT)" d="M1149.2,1139.5l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1149.9,1148.4,1150.9,1140.5,1149.2,1139.5z">
                </path>
                <linearGradient id="bU" x1="1885.958" x2="1005.512" y1="1157.469" y2="1133.511" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bU)" d="M1148.2,1138.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1149.9,1141.9,1149.9,1139.3,1148.2,1138.3z">
                </path>
                <linearGradient id="bV" x1="1127.571" x2="1213.116" y1="1179.439" y2="1179.439" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bV)" d="M1212.2,1176.1l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1212.9,1185,1214,1177.1,1212.2,1176.1z">
                </path>
                <linearGradient id="bW" x1="1885.022" x2="1004.577" y1="1192.345" y2="1168.387" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bW)" d="M1211.2,1175l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1212.9,1178.5,1212.9,1176,1211.2,1175z">
                </path>
                <linearGradient id="bX" x1="1190.589" x2="1276.134" y1="1216.055" y2="1216.055" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bX)" d="M1275.3,1212.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1275.9,1221.6,1277,1213.7,1275.3,1212.7z">
                </path>
                <linearGradient id="bY" x1="1884.086" x2="1003.641" y1="1227.22" y2="1203.263" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#bY)" d="M1274.2,1211.6l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1275.9,1215.1,1275.9,1212.6,1274.2,1211.6z">
                </path>
                <linearGradient id="bZ" x1="1253.607" x2="1339.152" y1="1252.671" y2="1252.671" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                <path fill="url(#bZ)" d="M1338.3,1249.3l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1339,1258.3,1340,1250.3,1338.3,1249.3z">
                </path>
                <linearGradient id="ca" x1="1883.151" x2="1002.706" y1="1262.096" y2="1238.138" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#bfbdbe">
                    </stop>
                </linearGradient>
                <path fill="url(#ca)" d="M1337.2,1248.2l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1339,1251.7,1339,1249.2,1337.2,1248.2z">
                </path>
                <g><linearGradient id="cb" x1="1316.625" x2="1591.719" y1="1343.781" y2="1343.781" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#cb)" d="M1590.8,1395l-235.6-129.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l234.8,135.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1591.5,1403.9,1592.6,1395.9,1590.8,1395z">
                    </path>
                    <linearGradient id="cc" x1="3165.916" x2="283.534" y1="1383.817" y2="1305.385" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#cc)" d="M1589.8,1393.8l-234.6-135.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l234.8,135.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1591.5,1397.3,1591.5,1394.8,1589.8,1393.8z">
                    </path>
                </g><g><linearGradient id="cd" x1="1568.698" x2="1654.242" y1="1435.751" y2="1435.751" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#cd)" d="M1653.4,1432.4l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1654,1441.3,1655.1,1433.4,1653.4,1432.4z">
                    </path>
                    <linearGradient id="ce" x1="1878.473" x2="998.028" y1="1436.475" y2="1412.517" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#ce)" d="M1652.3,1431.3l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1654,1434.8,1654,1432.3,1652.3,1431.3z">
                    </path>
                </g><g><linearGradient id="cf" x1="1631.716" x2="1717.26" y1="1472.367" y2="1472.367" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#cf)" d="M1716.4,1469l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1717.1,1478,1718.1,1470,1716.4,1469z">
                    </path>
                    <linearGradient id="cg" x1="1877.538" x2="997.092" y1="1471.35" y2="1447.393" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#cg)" d="M1715.3,1467.9l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1717.1,1471.4,1717.1,1468.9,1715.3,1467.9z">
                    </path>
                </g><g><linearGradient id="ch" x1="1694.734" x2="1780.278" y1="1508.983" y2="1508.983" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                </stop>
                    <stop offset="1" stop-color="#3f3d3d">
                    </stop>
                </linearGradient>
                    <path fill="url(#ch)" d="M1779.4,1505.7l-46.1-20.7c-2.1-1.2-4.7-1.2-6.8,0l-30.8,11.5c-1.8,1-0.9,9.4,0.8,10.4l45.2,26.2
								c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1780.1,1514.6,1781.1,1506.7,1779.4,1505.7z">
                    </path>
                    <linearGradient id="ci" x1="1876.602" x2="996.157" y1="1506.226" y2="1482.268" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5e5e5e">
                    </stop>
                        <stop offset="1" stop-color="#bfbdbe">
                        </stop>
                    </linearGradient>
                    <path fill="url(#ci)" d="M1778.4,1504.5l-45.1-26.1c-2.1-1.2-4.7-1.2-6.8,0l-29.9,17.3c-1.8,1-1.8,3.6,0,4.6l45.2,26.2
									c1.9,1.1,4.3,1.1,6.3,0l30.3-17.5C1780.1,1508,1780.1,1505.5,1778.4,1504.5z">
                    </path>
                </g></g><path fill="#fdfdfd" d="M2098.5,1402.9l-462.8,267.6c-29.7,17.2-66.1,17.2-95.7,0l-690.8-400.1c-13.1-7.6-19.7-20.8-20-34.1
					c-0.4,14.1,6.3,28.3,20,36.3l690.8,400.1c29.7,17.2,66.1,17.2,95.7,0l462.8-267.6c13.5-7.8,20-21.7,19.6-35.5
					C2117.8,1382.6,2111.3,1395.5,2098.5,1402.9z">
            </path>
            <linearGradient id="cj" x1="1380.219" x2="2313.866" y1="766.773" y2="810.644" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
            </stop>
                <stop offset="1" stop-color="#313031">
                </stop>
            </linearGradient>
            <path fill="url(#cj)" d="M1393.5,926.3l688.4,399.9c22,12.8,50.2,4.2,61.3-18.7l171.5-601.2c11.4-23.3,2.8-51.4-19.6-64.4
					l-669-388.6c-27.7-16.1-63.2-5.3-77.2,23.5l-170.6,599.4C1369.4,894.2,1376.1,916.1,1393.5,926.3z">
            </path>
            <linearGradient id="ck" x1="2120.487" x2="1634.647" y1="1236.037" y2="438.687" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1462be">
            </stop>
                <stop offset="1" stop-color="#40b7f0">
                </stop>
            </linearGradient>
            <path fill="url(#ck)" d="M2103.9,1315.3c-4.7,0-9.4-1.3-13.5-3.7l-688.4-399.9c-9.8-5.7-13.6-18.2-8.6-28.4l170.6-599.4
					c6.5-13.3,19.7-21.6,34.6-21.6c6.7,0,13.3,1.8,19.2,5.2l669,388.6c14.8,8.6,20.5,27.3,13,42.6l-171.5,601.2
					C2123.6,1309.5,2114.3,1315.3,2103.9,1315.3L2103.9,1315.3z">
            </path>
            <g><linearGradient id="cl" x1="1057.653" x2="1993.078" y1="702.032" y2="745.986" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#161616">
            </stop>
                <stop offset="1" stop-color="#313031">
                </stop>
            </linearGradient>
                <path fill="url(#cl)" d="M1792.2,1271.3c-4.9,0-9.7-1.3-14-3.8l-715.4-415.5c-10.2-5.9-14.2-18.9-9-29.5l177.3-622.8
				c6.7-13.8,20.5-22.4,35.9-22.4c7,0,13.9,1.9,20,5.4l695.2,403.8c15.3,8.9,21.3,28.4,13.5,44.3l-178.2,624.8
				C1812.8,1265.2,1803.1,1271.3,1792.2,1271.3L1792.2,1271.3z" opacity=".86">
                </path>
                {/* Yellow code lines */}
                <path className='vibrate-1' fill="#ffe000" d="M1378.4,321.2l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1382.4,321.6,1380.3,322.3,1378.4,321.2z">
                </path>
                <path fill="#fff" d="M1301.8 277.7l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1305.2 278 1303.4 278.6 1301.8 277.7zM1295 300.5l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1298.5 300.9 1296.7 301.5 1295 300.5zM1288.3 323.4l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1291.7 323.8 1290 324.3 1288.3 323.4zM1281.6 346.3l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1285 346.6 1283.2 347.2 1281.6 346.3zM1274.8 369.1l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1278.3 369.5 1276.5 370.1 1274.8 369.1zM1268.1 392l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1271.5 392.3 1269.8 392.9 1268.1 392zM1261.4 414.8l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1264.8 415.2 1263.1 415.8 1261.4 414.8zM1254.7 437.7l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1258.1 438 1256.3 438.6 1254.7 437.7zM1247.9 460.5l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1251.3 460.9 1249.6 461.5 1247.9 460.5zM1241.2 483.4l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1244.6 483.8 1242.9 484.3 1241.2 483.4zM1234.5 506.3l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1237.9 506.6 1236.1 507.2 1234.5 506.3zM1227.7 529.1l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1231.2 529.5 1229.4 530.1 1227.7 529.1zM1221 552l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1224.4 552.3 1222.7 552.9 1221 552zM1214.3 574.8l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1217.7 575.2 1216 575.8 1214.3 574.8zM1207.6 597.7l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1211 598 1209.2 598.6 1207.6 597.7zM1200.8 620.5l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1204.2 620.9 1202.5 621.5 1200.8 620.5zM1194.1 643.4l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1197.5 643.8 1195.8 644.3 1194.1 643.4zM1187.4 666.2l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1190.8 666.6 1189 667.2 1187.4 666.2zM1180.6 689.1l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1184.1 689.5 1182.3 690 1180.6 689.1zM1173.9 712l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1177.3 712.3 1175.6 712.9 1173.9 712zM1167.2 734.8l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1170.6 735.2 1168.9 735.8 1167.2 734.8zM1160.5 757.7l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1163.9 758 1162.1 758.6 1160.5 757.7zM1153.7 780.5l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1157.1 780.9 1155.4 781.5 1153.7 780.5zM1147 803.4l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1150.4 803.7 1148.7 804.3 1147 803.4zM1140.3 826.2l-26.4-15c-1.7-.9-2.6-3.1-2.1-4.7l.7-2.3c.5-1.7 2.2-2.2 3.9-1.3l26.4 15c1.7.9 2.6 3.1 2.1 4.7l-.7 2.3C1143.7 826.6 1141.9 827.2 1140.3 826.2zM1649.1 474.7l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1653.1 475.2 1651 475.8 1649.1 474.7zM1522.7 403.1l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1526.8 403.5 1524.7 404.2 1522.7 403.1zM1430.6 350.8l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1434.5 351.2 1432.5 351.9 1430.6 350.8zM1572 431l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1575.9 431.4 1573.9 432.1 1572 431zM1350 417.6l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1354 418.1 1351.9 418.7 1350 417.6z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1494.3,499.5l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l70.9,40.2
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1498.4,500,1496.3,500.6,1494.3,499.5z">
                </path>
                <path fill="#fff" d="M1402.2 447.3l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1406.1 447.7 1404.1 448.3 1402.2 447.3zM1543.6 527.5l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1547.5 527.9 1545.5 528.5 1543.6 527.5zM1309.6 554.8l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1313.6 555.2 1311.6 555.9 1309.6 554.8zM1454 636.7l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1458 637.1 1455.9 637.8 1454 636.7zM1361.8 584.5l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1365.7 584.9 1363.7 585.5 1361.8 584.5zM1503.2 664.6l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1507.1 665.1 1505.1 665.7 1503.2 664.6zM1286 635l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1290 635.4 1287.9 636.1 1286 635zM1430.3 716.9l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1434.4 717.3 1432.3 718 1430.3 716.9z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1338.2 664.6l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1342.1 665.1 1340.1 665.7 1338.2 664.6zM1479.6 744.8l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1483.5 745.3 1481.5 745.9 1479.6 744.8z">
                </path>
                <path fill="#fff" d="M1371.7,344l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1375.7,344.4,1373.6,345.1,1371.7,344z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1642.3,497.6l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1646.4,498,1644.3,498.7,1642.3,497.6z">
                </path>
                <path fill="#fff" d="M1725 544.5l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1729 544.9 1726.9 545.6 1725 544.5zM1516 425.9l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1520 426.3 1518 427 1516 425.9zM1423.9 373.7l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1427.8 374.1 1425.8 374.7 1423.9 373.7zM1565.2 453.9l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1569.1 454.3 1567.1 454.9 1565.2 453.9z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1328.3,491.2l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1332.3,491.7,1330.3,492.3,1328.3,491.2z">
                </path>
                <path fill="#fff" d="M1599,644.8l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1603,645.2,1601,645.9,1599,644.8z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1681.7,691.7L1631,663c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1685.7,692.1,1683.6,692.8,1681.7,691.7z">
                </path>
                <path fill="#fff" d="M1472.7 573.1l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1476.7 573.6 1474.6 574.2 1472.7 573.1zM1380.6 520.9l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1384.5 521.3 1382.5 522 1380.6 520.9zM1521.9 601.1l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1525.8 601.5 1523.8 602.1 1521.9 601.1zM1331.7 521l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1335.7 521.4 1333.6 522.1 1331.7 521zM1651.1 702.2l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1655.2 702.7 1653.1 703.3 1651.1 702.2z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1502,617.6l-84.9-48.2c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l84.9,48.2
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1506.1,618.1,1504,618.8,1502,617.6z">
                </path>
                <path fill="#fff" d="M1393.2 555.9l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1397.2 556.3 1395.2 557 1393.2 555.9zM1560 650.5l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1564 651 1562 651.6 1560 650.5zM1363.1 618.2l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1367.2 618.6 1365.1 619.3 1363.1 618.2zM1633.8 771.8l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1637.9 772.2 1635.8 772.9 1633.8 771.8z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1716.5,818.7l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1720.5,819.1,1718.4,819.8,1716.5,818.7z">
                </path>
                <path fill="#fff" d="M1507.5,700.1l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l70.9,40.2
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1511.5,700.5,1509.5,701.2,1507.5,700.1z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1415.4,647.8l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l0.4-1.5c0.6-1.9,2.6-2.5,4.5-1.5l35.3,20.1
						c1.9,1.1,3,3.5,2.4,5.4l-0.4,1.5C1419.3,648.2,1417.3,648.9,1415.4,647.8z">
                </path>
                <path fill="#fff" d="M1556.7 728l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1560.6 728.4 1558.6 729.1 1556.7 728zM1366.5 647.9l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1370.5 648.4 1368.5 649.1 1366.5 647.9zM1686 829.2l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1690 829.6 1687.9 830.3 1686 829.2z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1536.9,744.6l-84.9-48.2c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l84.9,48.2
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1540.9,745,1538.8,745.7,1536.9,744.6z">
                </path>
                <path fill="#fff" d="M1428 682.9l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1432.1 683.3 1430 684 1428 682.9zM1594.8 777.5l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1598.9 777.9 1596.8 778.6 1594.8 777.5zM1763.5 738.1l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1767.5 738.5 1765.4 739.2 1763.5 738.1zM1815.7 767.8l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1819.6 768.2 1817.6 768.8 1815.7 767.8z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1242.2,783.9l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l50.6,28.7
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1246.2,784.3,1244.1,785,1242.2,783.9z">
                </path>
                <path fill="#fff" d="M1386.5 865.8l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1390.6 866.2 1388.5 866.9 1386.5 865.8zM1294.4 813.5l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1298.3 813.9 1296.3 814.6 1294.4 813.5zM1435.8 893.7l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1439.7 894.1 1437.7 894.8 1435.8 893.7zM1218.6 864l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1222.6 864.5 1220.5 865.2 1218.6 864z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1362.9,946l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l70.9,40.2
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1366.9,946.4,1364.9,947.1,1362.9,946z">
                </path>
                <path fill="#fff" d="M1270.8 893.7l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1274.7 894.1 1272.7 894.8 1270.8 893.7zM1412.2 973.9l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1416.1 974.3 1414 975 1412.2 973.9zM1260.9 720.3l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1264.9 720.7 1262.8 721.4 1260.9 720.3zM1531.6 873.9l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1535.6 874.3 1533.5 875 1531.6 873.9z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1614.2 920.8l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1618.3 921.2 1616.2 921.9 1614.2 920.8zM1405.2 802.2l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1409.3 802.6 1407.2 803.3 1405.2 802.2z">
                </path>
                <path fill="#fff" d="M1313.1 749.9l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1317 750.3 1315 751 1313.1 749.9zM1454.5 830.1l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1458.4 830.5 1456.4 831.2 1454.5 830.1zM1264.3 750l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1268.3 750.5 1266.2 751.1 1264.3 750zM1583.7 931.3l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1587.7 931.7 1585.7 932.4 1583.7 931.3zM1434.6 846.7l-84.9-48.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l84.9 48.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1438.6 847.1 1436.6 847.8 1434.6 846.7zM1325.8 784.9l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1329.8 785.4 1327.7 786.1 1325.8 784.9zM1492.6 879.6l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1496.6 880 1494.5 880.7 1492.6 879.6zM1295.7 847.2l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1299.7 847.7 1297.7 848.3 1295.7 847.2zM1566.4 1000.8l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1570.4 1001.2 1568.4 1001.9 1566.4 1000.8z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1649.1 1047.7l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1653.1 1048.1 1651 1048.8 1649.1 1047.7zM1440.1 929.1l-70.9-40.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l70.9 40.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1444.1 929.6 1442 930.2 1440.1 929.1z">
                </path>
                <path fill="#fff" d="M1348 876.9l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1351.9 877.3 1349.9 878 1348 876.9zM1489.3 957.1L1454 937c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1493.2 957.5 1491.2 958.1 1489.3 957.1z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1299.1,877l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l0.4-1.2c0.6-1.9,2.6-2.6,4.6-1.5l61,34.6
						c2,1.1,3.1,3.6,2.5,5.6l-0.4,1.2C1303.1,877.4,1301,878.1,1299.1,877z">
                </path>
                <path fill="#fff" d="M1618.5 1058.2l-61-34.6c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l61 34.6c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1622.6 1058.7 1620.5 1059.3 1618.5 1058.2zM1469.4 973.6l-84.9-48.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l84.9 48.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1473.5 974.1 1471.4 974.8 1469.4 973.6zM1360.6 911.9l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1364.6 912.3 1362.6 913 1360.6 911.9zM1527.4 1006.5l-42.7-24.2c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l42.7 24.2c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1531.4 1007 1529.4 1007.6 1527.4 1006.5zM1696 967.2l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1700.1 967.6 1698 968.3 1696 967.2z">
                </path>
                <path className='vibrate-1' fill="#ffe000" d="M1748.3,996.8l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l0.4-1.5c0.6-1.9,2.6-2.5,4.5-1.5l35.3,20.1
						c1.9,1.1,3,3.5,2.4,5.4l-0.4,1.5C1752.2,997.2,1750.2,997.9,1748.3,996.8z">
                </path>
                <path fill="#fff" d="M1364.9 366.9l-50.6-28.7c-2-1.1-3.1-3.6-2.5-5.6l.4-1.2c.6-1.9 2.6-2.6 4.6-1.5l50.6 28.7c2 1.1 3.1 3.6 2.5 5.6l-.4 1.2C1368.9 367.3 1366.9 368 1364.9 366.9zM1417.2 396.5l-35.3-20.1c-1.9-1.1-3-3.5-2.4-5.4l.4-1.5c.6-1.9 2.6-2.5 4.5-1.5l35.3 20.1c1.9 1.1 3 3.5 2.4 5.4l-.4 1.5C1421.1 396.9 1419.1 397.6 1417.2 396.5z">
                </path>
            </g><g className='vibrate-1' opacity=".79"><path fill="#adacad" d="M2171.3 731.8l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2174.8 732.1 2173 732.7 2171.3 731.8zM2104.8 694l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2107.8 694.4 2106.3 694.9 2104.8 694zM2099 713.9l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2101.9 714.2 2100.4 714.7 2099 713.9zM2093.1 733.7l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2096.1 734 2094.6 734.5 2093.1 733.7zM2087.3 753.6l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2090.3 753.9 2088.7 754.4 2087.3 753.6zM2081.5 773.4l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2084.4 773.7 2082.9 774.2 2081.5 773.4zM2075.6 793.2l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2078.6 793.6 2077.1 794.1 2075.6 793.2zM2069.8 813.1l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2072.7 813.4 2071.2 813.9 2069.8 813.1zM2063.9 832.9l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2066.9 833.2 2065.4 833.7 2063.9 832.9zM2058.1 852.8l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2061.1 853.1 2059.5 853.6 2058.1 852.8zM2052.3 872.6l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2055.2 872.9 2053.7 873.4 2052.3 872.6zM2046.4 892.4l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2049.4 892.8 2047.9 893.3 2046.4 892.4zM2040.6 912.3l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2043.5 912.6 2042 913.1 2040.6 912.3zM2034.7 932.1l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2037.7 932.4 2036.2 932.9 2034.7 932.1zM2028.9 952l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2031.9 952.3 2030.3 952.8 2028.9 952zM2023.1 971.8l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2026 972.1 2024.5 972.6 2023.1 971.8zM2017.2 991.6l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2020.2 991.9 2018.7 992.5 2017.2 991.6zM2011.4 1011.5l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2014.3 1011.8 2012.8 1012.3 2011.4 1011.5zM2005.5 1031.3l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2008.5 1031.6 2007 1032.1 2005.5 1031.3zM1999.7 1051.2l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C2002.7 1051.5 2001.1 1052 1999.7 1051.2zM1993.8 1071l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C1996.8 1071.3 1995.3 1071.8 1993.8 1071zM1988 1090.8l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C1991 1091.1 1989.4 1091.6 1988 1090.8zM1982.2 1110.7l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C1985.1 1111 1983.6 1111.5 1982.2 1110.7zM1976.3 1130.5l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C1979.3 1130.8 1977.8 1131.3 1976.3 1130.5zM1970.5 1150.3l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C1973.5 1150.7 1971.9 1151.2 1970.5 1150.3zM1964.6 1170.2l-22.9-13c-1.4-.8-2.3-2.7-1.9-4.1l.6-2c.4-1.4 1.9-1.9 3.4-1.1l22.9 13c1.4.8 2.3 2.7 1.9 4.1l-.6 2C1967.6 1170.5 1966.1 1171 1964.6 1170.2zM2406.3 865.1l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2409.8 865.5 2408 866 2406.3 865.1zM2296.6 802.9l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2300.1 803.2 2298.3 803.8 2296.6 802.9zM2216.7 757.5l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2220.1 757.9 2218.3 758.4 2216.7 757.5zM2339.4 827.1l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2342.7 827.5 2341 828 2339.4 827.1zM2146.7 815.5l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2150.2 815.9 2148.4 816.5 2146.7 815.5zM2272 886.6l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2275.5 887 2273.7 887.6 2272 886.6zM2192 841.2l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2195.4 841.6 2193.7 842.2 2192 841.2zM2314.7 910.8l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2318.1 911.2 2316.4 911.8 2314.7 910.8zM2111.6 934.6l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2115.1 935 2113.3 935.5 2111.6 934.6zM2236.9 1005.7l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2240.4 1006 2238.6 1006.6 2236.9 1005.7zM2157 960.3l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2160.4 960.7 2158.6 961.3 2157 960.3zM2279.7 1029.9l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2283 1030.3 2281.3 1030.9 2279.7 1029.9zM2091.1 1004.2l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2094.6 1004.6 2092.8 1005.2 2091.1 1004.2zM2216.4 1075.3l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2219.9 1075.7 2218.1 1076.2 2216.4 1075.3zM2136.5 1029.9l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2139.9 1030.3 2138.1 1030.9 2136.5 1029.9zM2259.2 1099.5l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2262.5 1099.9 2260.8 1100.5 2259.2 1099.5zM2165.5 751.6l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2169 752 2167.2 752.6 2165.5 751.6zM2400.4 884.9l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2403.9 885.3 2402.1 885.9 2400.4 884.9zM2472.2 925.6l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2475.7 926 2473.9 926.6 2472.2 925.6zM2290.8 822.7l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2294.3 823.1 2292.5 823.7 2290.8 822.7zM2210.8 777.3l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2214.2 777.7 2212.5 778.3 2210.8 777.3zM2333.5 847l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2336.9 847.3 2335.2 847.9 2333.5 847zM2127.9 879.4l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2131.4 879.8 2129.6 880.4 2127.9 879.4zM2362.8 1012.7l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2366.3 1013.1 2364.5 1013.7 2362.8 1012.7zM2434.6 1053.4l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2438.1 1053.8 2436.3 1054.4 2434.6 1053.4zM2253.2 950.5l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2256.7 950.9 2254.9 951.5 2253.2 950.5zM2173.2 905.1l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2176.6 905.5 2174.9 906.1 2173.2 905.1zM2295.9 974.7l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2299.3 975.1 2297.5 975.7 2295.9 974.7zM2130.8 905.2l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2134.3 905.6 2132.5 906.2 2130.8 905.2zM2408.1 1062.5l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2411.6 1062.9 2409.8 1063.5 2408.1 1062.5zM2278.7 989.1l-73.7-41.8c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l73.7 41.8c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2282.2 989.5 2280.4 990.1 2278.7 989.1zM2184.2 935.5l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2187.7 935.9 2185.9 936.5 2184.2 935.5zM2329 1017.7l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2332.5 1018 2330.7 1018.6 2329 1017.7zM2158.1 989.6l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2161.6 990 2159.8 990.6 2158.1 989.6zM2393 1122.9l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2396.5 1123.3 2394.7 1123.9 2393 1122.9zM2464.8 1163.6l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2468.3 1164 2466.5 1164.6 2464.8 1163.6zM2283.4 1060.7l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2286.9 1061.1 2285.1 1061.6 2283.4 1060.7zM2203.4 1015.3l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2206.8 1015.7 2205.1 1016.3 2203.4 1015.3zM2326.1 1084.9l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2329.5 1085.3 2327.8 1085.9 2326.1 1084.9zM2161 1015.4l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2164.5 1015.8 2162.7 1016.4 2161 1015.4zM2438.3 1172.7l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2441.8 1173.1 2440 1173.7 2438.3 1172.7zM2308.9 1099.3l-73.7-41.8c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l73.7 41.8c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2312.4 1099.7 2310.6 1100.3 2308.9 1099.3zM2214.4 1045.7l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2217.9 1046.1 2216.1 1046.7 2214.4 1045.7zM2359.2 1127.9l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2362.7 1128.2 2360.9 1128.8 2359.2 1127.9zM2505.6 1093.7l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2509.1 1094.1 2507.3 1094.7 2505.6 1093.7zM2550.9 1119.4l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2554.3 1119.8 2552.6 1120.4 2550.9 1119.4zM2053.1 1133.4l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2056.6 1133.8 2054.8 1134.4 2053.1 1133.4zM2178.4 1204.5l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2181.9 1204.9 2180.1 1205.4 2178.4 1204.5zM2098.4 1159.1l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2101.8 1159.5 2100.1 1160.1 2098.4 1159.1zM2221.1 1228.7l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2224.5 1229.1 2222.8 1229.7 2221.1 1228.7zM2032.6 1203l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2036.1 1203.4 2034.3 1204 2032.6 1203zM2157.9 1274.1l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2161.4 1274.5 2159.6 1275.1 2157.9 1274.1zM2078 1228.7l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2081.3 1229.1 2079.6 1229.7 2078 1228.7zM2200.6 1298.3l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2204 1298.7 2202.3 1299.3 2200.6 1298.3zM2069.3 1078.2l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2072.8 1078.6 2071 1079.2 2069.3 1078.2zM2304.3 1211.5l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2307.8 1211.9 2306 1212.5 2304.3 1211.5zM2376 1252.2l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2379.5 1252.6 2377.7 1253.2 2376 1252.2zM2194.6 1149.3l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2198.1 1149.7 2196.3 1150.3 2194.6 1149.3zM2114.7 1103.9l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2118.1 1104.3 2116.3 1104.9 2114.7 1103.9zM2237.4 1173.5l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2240.8 1173.9 2239 1174.5 2237.4 1173.5zM2072.3 1104l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2075.8 1104.4 2074 1105 2072.3 1104zM2349.5 1261.4l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2353 1261.7 2351.2 1262.3 2349.5 1261.4zM2220.1 1187.9l-73.7-41.8c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l73.7 41.8c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2223.6 1188.3 2221.8 1188.9 2220.1 1187.9zM2125.7 1134.3l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2129.2 1134.7 2127.4 1135.3 2125.7 1134.3zM2270.4 1216.5l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2273.9 1216.9 2272.1 1217.4 2270.4 1216.5zM2099.6 1188.4l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2103.1 1188.8 2101.3 1189.4 2099.6 1188.4zM2334.5 1321.7l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2338 1322.1 2336.2 1322.7 2334.5 1321.7zM2406.3 1362.4l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2409.8 1362.8 2408 1363.4 2406.3 1362.4zM2224.9 1259.5l-61.5-34.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l61.5 34.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2228.4 1259.9 2226.6 1260.5 2224.9 1259.5zM2144.9 1214.1l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2148.3 1214.5 2146.6 1215.1 2144.9 1214.1zM2267.6 1283.7l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2271 1284.1 2269.2 1284.7 2267.6 1283.7zM2102.5 1214.2l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2106 1214.6 2104.2 1215.2 2102.5 1214.2zM2379.8 1371.5l-53-30.1c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l53 30.1c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2383.3 1371.9 2381.5 1372.5 2379.8 1371.5zM2250.4 1298.1l-73.7-41.8c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l73.7 41.8c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2253.9 1298.5 2252.1 1299.1 2250.4 1298.1zM2155.9 1244.5l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2159.4 1244.9 2157.6 1245.5 2155.9 1244.5zM2300.7 1326.7l-37.1-21c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l37.1 21c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2304.2 1327 2302.4 1327.6 2300.7 1326.7zM2447 1292.5l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2450.5 1292.9 2448.7 1293.5 2447 1292.5zM2492.4 1318.2l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2495.8 1318.6 2494 1319.2 2492.4 1318.2zM2159.6 771.5l-43.9-24.9c-1.7-1-2.7-3.1-2.2-4.8l.3-1.1c.5-1.7 2.3-2.3 4-1.3l43.9 24.9c1.7 1 2.7 3.1 2.2 4.8l-.3 1.1C2163.1 771.8 2161.3 772.4 2159.6 771.5zM2205 797.2l-30.7-17.4c-1.6-.9-2.6-3-2.1-4.7l.4-1.3c.5-1.6 2.2-2.2 3.9-1.3l30.7 17.4c1.6.9 2.6 3 2.1 4.7l-.4 1.3C2208.4 797.5 2206.6 798.1 2205 797.2z">
            </path>
                {/* 010101010101010101 */}
            </g><g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M2098.7 1491.2c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2095.1 1477.5 2098.7 1482.7 2098.7 1491.2zM2082.5 1490.7c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2085.1 1479.7 2082.5 1483.5 2082.5 1490.7zM2087.6 1530.3L2087.6 1530.3l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1530.3zM2087.6 1579.6L2087.6 1579.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1579.6zM2098.7 1639.3c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2095.1 1625.6 2098.7 1630.8 2098.7 1639.3zM2082.5 1638.8c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2085.1 1627.8 2082.5 1631.5 2082.5 1638.8zM2098.7 1688.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2095.1 1674.9 2098.7 1680.1 2098.7 1688.6zM2082.5 1688.2c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2085.1 1677.2 2082.5 1680.9 2082.5 1688.2zM2087.6 1727.7L2087.6 1727.7l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1727.7zM2087.6 1777.1L2087.6 1777.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1777.1zM2087.6 1826.4L2087.6 1826.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1826.4zM2098.7 1886.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2095.1 1872.4 2098.7 1877.6 2098.7 1886.1zM2082.5 1885.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2085.1 1874.6 2082.5 1878.4 2082.5 1885.6zM2098.7 1935.5c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C2095.1 1921.7 2098.7 1927 2098.7 1935.5zM2082.5 1935c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2085.1 1924 2082.5 1927.7 2082.5 1935z">
            </path>
            </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M2043.5 1506.9L2043.5 1506.9l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1506.9zM2043.5 1556.2L2043.5 1556.2l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1556.2zM2054.5 1615.9c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2051 1602.2 2054.5 1607.4 2054.5 1615.9zM2038.3 1615.4c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2040.9 1604.4 2038.3 1608.1 2038.3 1615.4zM2043.5 1655L2043.5 1655l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1655zM2043.5 1704.3L2043.5 1704.3l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1704.3zM2054.5 1764c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2051 1750.3 2054.5 1755.5 2054.5 1764zM2038.3 1763.5c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2040.9 1752.5 2038.3 1756.2 2038.3 1763.5zM2054.5 1813.3c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2051 1799.6 2054.5 1804.8 2054.5 1813.3zM2038.3 1812.9c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2040.9 1801.9 2038.3 1805.6 2038.3 1812.9zM2043.5 1852.4L2043.5 1852.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1852.4zM2043.5 1901.8L2043.5 1901.8l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1901.8zM2054.5 1961.4c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2051 1947.7 2054.5 1952.9 2054.5 1961.4zM2038.3 1960.9c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C2040.9 1950 2038.3 1953.7 2038.3 1960.9z">
            </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M2003.7 1544.9c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C2000.1 1531.2 2003.7 1536.4 2003.7 1544.9zM1987.5 1544.5c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1990 1533.5 1987.5 1537.2 1987.5 1544.5zM1992.6 1584L1992.6 1584l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1584zM1992.6 1633.4L1992.6 1633.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1633.4zM2003.7 1693c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C2000.1 1679.3 2003.7 1684.5 2003.7 1693zM1987.5 1692.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1990 1681.6 1987.5 1685.3 1987.5 1692.6zM2003.7 1742.4c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C2000.1 1728.7 2003.7 1733.9 2003.7 1742.4zM1987.5 1741.9c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1990 1730.9 1987.5 1734.6 1987.5 1741.9zM1992.6 1781.5L1992.6 1781.5l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1781.5zM1992.6 1830.8L1992.6 1830.8l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1830.8zM1992.6 1880.2L1992.6 1880.2l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1880.2zM2003.7 1939.8c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C2000.1 1926.1 2003.7 1931.3 2003.7 1939.8zM1987.5 1939.4c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1990 1928.4 1987.5 1932.1 1987.5 1939.4zM2003.7 1989.2c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C2000.1 1975.5 2003.7 1980.7 2003.7 1989.2zM1987.5 1988.7c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1990 1977.7 1987.5 1981.4 1987.5 1988.7z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1948.4 1560.6L1948.4 1560.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1560.6zM1948.4 1610L1948.4 1610l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1610zM1959.5 1669.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1955.9 1655.9 1959.5 1661.1 1959.5 1669.6zM1943.3 1669.1c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1945.9 1658.2 1943.3 1661.9 1943.3 1669.1zM1948.4 1708.7L1948.4 1708.7l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1708.7zM1948.4 1758L1948.4 1758l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1758zM1959.5 1817.7c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1955.9 1804 1959.5 1809.2 1959.5 1817.7zM1943.3 1817.2c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1945.9 1806.2 1943.3 1810 1943.3 1817.2zM1959.5 1867.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1955.9 1853.4 1959.5 1858.6 1959.5 1867.1zM1943.3 1866.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1945.9 1855.6 1943.3 1859.3 1943.3 1866.6zM1948.4 1906.1L1948.4 1906.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1906.1zM1948.4 1955.5L1948.4 1955.5l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1955.5zM1959.5 2015.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1955.9 2001.4 1959.5 2006.6 1959.5 2015.1zM1943.3 2014.7c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1945.9 2003.7 1943.3 2007.4 1943.3 2014.7z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1908.7 1598.7c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1905.1 1585 1908.7 1590.2 1908.7 1598.7zM1892.4 1598.2c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1895 1587.2 1892.4 1590.9 1892.4 1598.2zM1897.6 1637.7L1897.6 1637.7l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1637.7zM1897.6 1687.1L1897.6 1687.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1687.1zM1908.7 1746.7c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1905.1 1733 1908.7 1738.2 1908.7 1746.7zM1892.4 1746.3c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1895 1735.3 1892.4 1739 1892.4 1746.3zM1908.7 1796.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1905.1 1782.4 1908.7 1787.6 1908.7 1796.1zM1892.4 1795.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1895 1784.6 1892.4 1788.4 1892.4 1795.6zM1897.6 1835.2L1897.6 1835.2l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1835.2zM1897.6 1884.5L1897.6 1884.5l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1884.5zM1897.6 1933.9L1897.6 1933.9l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1933.9zM1908.7 1993.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1905.1 1979.8 1908.7 1985.1 1908.7 1993.6zM1892.4 1993.1c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1895 1982.1 1892.4 1985.8 1892.4 1993.1zM1908.7 2042.9c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1905.1 2029.2 1908.7 2034.4 1908.7 2042.9zM1892.4 2042.4c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1895 2031.5 1892.4 2035.2 1892.4 2042.4z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1813.6 1652.4c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1810.1 1638.7 1813.6 1643.9 1813.6 1652.4zM1797.4 1651.9c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1800 1640.9 1797.4 1644.7 1797.4 1651.9zM1802.6 1691.5L1802.6 1691.5l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1691.5zM1802.6 1740.8L1802.6 1740.8l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1740.8zM1813.6 1800.5c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1810.1 1786.8 1813.6 1792 1813.6 1800.5zM1797.4 1800c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1800 1789 1797.4 1792.7 1797.4 1800zM1813.6 1849.8c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1810.1 1836.1 1813.6 1841.3 1813.6 1849.8zM1797.4 1849.4c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1800 1838.4 1797.4 1842.1 1797.4 1849.4zM1802.6 1888.9L1802.6 1888.9l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1888.9zM1802.6 1938.3L1802.6 1938.3l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1938.3zM1802.6 1987.6L1802.6 1987.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1987.6zM1813.6 2047.3c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1810.1 2033.6 1813.6 2038.8 1813.6 2047.3zM1797.4 2046.8c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1800 2035.8 1797.4 2039.5 1797.4 2046.8zM1813.6 2096.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1810.1 2082.9 1813.6 2088.2 1813.6 2096.6zM1797.4 2096.2c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1800 2085.2 1797.4 2088.9 1797.4 2096.2z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1758.4 1668.1L1758.4 1668.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1668.1zM1758.4 1717.4L1758.4 1717.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1717.4zM1769.5 1777.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1765.9 1763.4 1769.5 1768.6 1769.5 1777.1zM1753.2 1776.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1755.8 1765.6 1753.2 1769.3 1753.2 1776.6zM1758.4 1816.1L1758.4 1816.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1816.1zM1758.4 1865.5L1758.4 1865.5l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1865.5zM1769.5 1925.2c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1765.9 1911.5 1769.5 1916.7 1769.5 1925.2zM1753.2 1924.7c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1755.8 1913.7 1753.2 1917.4 1753.2 1924.7zM1769.5 1974.5c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1765.9 1960.8 1769.5 1966 1769.5 1974.5zM1753.2 1974.1c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1755.8 1963.1 1753.2 1966.8 1753.2 1974.1zM1758.4 2013.6L1758.4 2013.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2013.6zM1758.4 2063L1758.4 2063l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2063zM1769.5 2122.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1765.9 2108.9 1769.5 2114.1 1769.5 2122.6zM1753.2 2122.1c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1755.8 2111.1 1753.2 2114.9 1753.2 2122.1z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1718.6 1706.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-9 4.3-13.7 10.4-13.3C1715 1692.4 1718.6 1697.6 1718.6 1706.1zM1702.4 1705.7c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1705 1694.7 1702.4 1698.4 1702.4 1705.7zM1707.5 1745.2L1707.5 1745.2l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1745.2zM1707.5 1794.6L1707.5 1794.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1794.6zM1718.6 1854.2c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-9 4.3-13.7 10.4-13.3C1715 1840.5 1718.6 1845.7 1718.6 1854.2zM1702.4 1853.7c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1705 1842.7 1702.4 1846.5 1702.4 1853.7zM1718.6 1903.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-9 4.3-13.7 10.4-13.3C1715 1889.9 1718.6 1895.1 1718.6 1903.6zM1702.4 1903.1c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1705 1892.1 1702.4 1895.8 1702.4 1903.1zM1707.5 1942.6L1707.5 1942.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1942.6zM1707.5 1992L1707.5 1992l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1992zM1707.5 2041.4L1707.5 2041.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2041.4zM1718.6 2101c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-9 4.3-13.7 10.4-13.3C1715 2087.3 1718.6 2092.5 1718.6 2101zM1702.4 2100.5c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1705 2089.6 1702.4 2093.3 1702.4 2100.5zM1718.6 2150.4c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1715 2136.7 1718.6 2141.9 1718.6 2150.4zM1702.4 2149.9c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1705 2138.9 1702.4 2142.6 1702.4 2149.9z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1663.4 1721.8L1663.4 1721.8l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1721.8zM1663.4 1771.2L1663.4 1771.2l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1771.2zM1674.4 1830.8c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1670.8 1817.1 1674.4 1822.3 1674.4 1830.8zM1658.2 1830.3c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1660.8 1819.3 1658.2 1823.1 1658.2 1830.3zM1663.4 1869.9L1663.4 1869.9l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1869.9zM1663.4 1919.2L1663.4 1919.2l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1919.2zM1674.4 1978.9c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1670.8 1965.2 1674.4 1970.4 1674.4 1978.9zM1658.2 1978.4c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1660.8 1967.4 1658.2 1971.2 1658.2 1978.4zM1674.4 2028.3c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1670.8 2014.5 1674.4 2019.8 1674.4 2028.3zM1658.2 2027.8c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1660.8 2016.8 1658.2 2020.5 1658.2 2027.8zM1663.4 2067.3L1663.4 2067.3l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2067.3zM1663.4 2116.7L1663.4 2116.7l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2116.7zM1674.4 2176.3c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1670.8 2162.6 1674.4 2167.8 1674.4 2176.3zM1658.2 2175.9c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1660.8 2164.9 1658.2 2168.6 1658.2 2175.9z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1623.6 1759.9c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1620 1746.2 1623.6 1751.4 1623.6 1759.9zM1607.4 1759.4c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1609.9 1748.4 1607.4 1752.1 1607.4 1759.4zM1612.5 1798.9L1612.5 1798.9l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1798.9zM1612.5 1848.3L1612.5 1848.3l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1848.3zM1623.6 1907.9c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1620 1894.2 1623.6 1899.4 1623.6 1907.9zM1607.4 1907.5c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1609.9 1896.5 1607.4 1900.2 1607.4 1907.5zM1623.6 1957.3c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1620 1943.6 1623.6 1948.8 1623.6 1957.3zM1607.4 1956.8c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1609.9 1945.8 1607.4 1949.6 1607.4 1956.8zM1612.5 1996.4L1612.5 1996.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1996.4zM1612.5 2045.7L1612.5 2045.7l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2045.7zM1612.5 2095.1L1612.5 2095.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2095.1zM1623.6 2154.7c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1620 2141 1623.6 2146.2 1623.6 2154.7zM1607.4 2154.3c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1609.9 2143.3 1607.4 2147 1607.4 2154.3zM1623.6 2204.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.2 0-9 4.3-13.7 10.4-13.3C1620 2190.4 1623.6 2195.6 1623.6 2204.1zM1607.4 2203.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1609.9 2192.7 1607.4 2196.4 1607.4 2203.6z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1568.3 1775.5L1568.3 1775.5l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1775.5zM1568.3 1824.9L1568.3 1824.9l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1824.9zM1579.4 1884.5c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1575.8 1870.8 1579.4 1876 1579.4 1884.5zM1563.2 1884.1c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1565.8 1873.1 1563.2 1876.8 1563.2 1884.1zM1568.3 1923.6L1568.3 1923.6l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1923.6zM1568.3 1973L1568.3 1973l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V1973zM1579.4 2032.6c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1575.8 2018.9 1579.4 2024.1 1579.4 2032.6zM1563.2 2032.2c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1565.8 2021.2 1563.2 2024.9 1563.2 2032.2zM1579.4 2082c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1575.8 2068.3 1579.4 2073.5 1579.4 2082zM1563.2 2081.5c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1565.8 2070.5 1563.2 2074.2 1563.2 2081.5zM1568.3 2121.1L1568.3 2121.1l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2121.1zM1568.3 2170.4L1568.3 2170.4l-5.3 2.2-.8-2.8 6.5-2.8 3.4.2v26.7l-3.9-.2V2170.4zM1579.4 2230.1c0 9.1-3.8 13.9-10.4 13.5-5.8-.3-9.8-5.4-9.9-14.3 0-8.9 4.3-13.6 10.4-13.3C1575.8 2216.4 1579.4 2221.6 1579.4 2230.1zM1563.2 2229.6c0 6.9 2.4 11 6.1 11.2 4.1.2 6.1-4 6.1-10.8 0-6.6-1.9-11-6.1-11.2C1565.8 2218.6 1563.2 2222.3 1563.2 2229.6z">
                </path>
                </g></g><g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1472.2 1715.3c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1468.6 1701 1472.2 1706.8 1472.2 1715.3zM1455.9 1711.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1458.5 1701.4 1455.9 1704.7 1455.9 1711.9zM1461.1 1752.4L1461.1 1752.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1752.4zM1461.1 1801.8L1461.1 1801.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1801.8zM1472.2 1863.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1468.6 1849.1 1472.2 1854.9 1472.2 1863.4zM1455.9 1860c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1458.5 1849.5 1455.9 1852.8 1455.9 1860zM1472.2 1912.8c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1468.6 1898.4 1472.2 1904.3 1472.2 1912.8zM1455.9 1909.4c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1458.5 1898.9 1455.9 1902.1 1455.9 1909.4zM1461.1 1949.8L1461.1 1949.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1949.8zM1461.1 1999.2L1461.1 1999.2l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1999.2zM1461.1 2048.6L1461.1 2048.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2048.6zM1472.2 2110.2c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1468.6 2095.9 1472.2 2101.7 1472.2 2110.2zM1455.9 2106.8c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1458.5 2096.3 1455.9 2099.6 1455.9 2106.8zM1472.2 2159.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1468.6 2145.2 1472.2 2151.1 1472.2 2159.6zM1455.9 2156.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1458.5 2145.7 1455.9 2148.9 1455.9 2156.2zM1461.1 2196.7L1461.1 2196.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2196.7zM1461.1 2246L1461.1 2246l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2246z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1416.9 1677L1416.9 1677l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1677zM1416.9 1726.4L1416.9 1726.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1726.4zM1428 1788.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1424.4 1773.7 1428 1779.6 1428 1788.1zM1411.8 1784.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1414.3 1774.1 1411.8 1777.4 1411.8 1784.7zM1416.9 1825.1L1416.9 1825.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1825.1zM1416.9 1874.5L1416.9 1874.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1874.5zM1428 1936.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1424.4 1921.8 1428 1927.6 1428 1936.1zM1411.8 1932.8c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1414.3 1922.2 1411.8 1925.5 1411.8 1932.8zM1428 1985.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1424.4 1971.1 1428 1977 1428 1985.5zM1411.8 1982.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1414.3 1971.6 1411.8 1974.9 1411.8 1982.1zM1416.9 2022.6L1416.9 2022.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2022.6zM1416.9 2071.9L1416.9 2071.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2071.9zM1428 2133.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1424.4 2119.2 1428 2125.1 1428 2133.6zM1411.8 2130.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1414.3 2119.7 1411.8 2122.9 1411.8 2130.2zM1428 2182.9c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1424.4 2168.6 1428 2174.4 1428 2182.9zM1411.8 2179.6c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1414.3 2169 1411.8 2172.3 1411.8 2179.6zM1416.9 2220L1416.9 2220l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2220z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1377.1 1661.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1373.6 1646.7 1377.1 1652.6 1377.1 1661.1zM1360.9 1657.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1363.5 1647.1 1360.9 1650.4 1360.9 1657.7zM1366.1 1698.1L1366.1 1698.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1698.1zM1366.1 1747.5L1366.1 1747.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1747.5zM1377.1 1809.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1373.6 1794.8 1377.1 1800.6 1377.1 1809.1zM1360.9 1805.8c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1363.5 1795.2 1360.9 1798.5 1360.9 1805.8zM1377.1 1858.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1373.6 1844.1 1377.1 1850 1377.1 1858.5zM1360.9 1855.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1363.5 1844.6 1360.9 1847.9 1360.9 1855.1zM1366.1 1895.6L1366.1 1895.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1895.6zM1366.1 1944.9L1366.1 1944.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1944.9zM1366.1 1994.3L1366.1 1994.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1994.3zM1377.1 2055.9c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1373.6 2041.6 1377.1 2047.4 1377.1 2055.9zM1360.9 2052.6c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1363.5 2042 1360.9 2045.3 1360.9 2052.6zM1377.1 2105.3c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1373.6 2091 1377.1 2096.8 1377.1 2105.3zM1360.9 2101.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1363.5 2091.4 1360.9 2094.7 1360.9 2101.9zM1366.1 2142.4L1366.1 2142.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2142.4zM1366.1 2191.8L1366.1 2191.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2191.8z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1321.9 1623L1321.9 1623l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1623zM1321.9 1672.4L1321.9 1672.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1672.4zM1333 1734c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1329.4 1719.7 1333 1725.5 1333 1734zM1316.7 1730.6c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1319.3 1720.1 1316.7 1723.4 1316.7 1730.6zM1321.9 1771.1L1321.9 1771.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1771.1zM1321.9 1820.5L1321.9 1820.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1820.5zM1333 1882.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1329.4 1867.8 1333 1873.6 1333 1882.1zM1316.7 1878.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1319.3 1868.2 1316.7 1871.4 1316.7 1878.7zM1333 1931.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1329.4 1917.1 1333 1923 1333 1931.5zM1316.7 1928.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1319.3 1917.6 1316.7 1920.8 1316.7 1928.1zM1321.9 1968.5L1321.9 1968.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1968.5zM1321.9 2017.9L1321.9 2017.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2017.9zM1333 2079.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1329.4 2065.2 1333 2071 1333 2079.5zM1316.7 2076.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1319.3 2065.6 1316.7 2068.9 1316.7 2076.2zM1321.9 2116.6L1321.9 2116.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2116.6zM1333 2178.3c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1329.4 2163.9 1333 2169.8 1333 2178.3zM1316.7 2174.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1319.3 2164.4 1316.7 2167.6 1316.7 2174.9z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1282.1 1607.8c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1278.5 1593.4 1282.1 1599.3 1282.1 1607.8zM1265.9 1604.4c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1268.5 1593.8 1265.9 1597.1 1265.9 1604.4zM1271 1644.8L1271 1644.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1644.8zM1271 1694.2L1271 1694.2l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1694.2zM1282.1 1755.8c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1278.5 1741.5 1282.1 1747.3 1282.1 1755.8zM1265.9 1752.5c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1268.5 1741.9 1265.9 1745.2 1265.9 1752.5zM1282.1 1805.2c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1278.5 1790.8 1282.1 1796.7 1282.1 1805.2zM1265.9 1801.8c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1268.5 1791.3 1265.9 1794.6 1265.9 1801.8zM1271 1842.3L1271 1842.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1842.3zM1271 1891.6L1271 1891.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1891.6zM1271 1941L1271 1941l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1941zM1282.1 2002.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1278.5 1988.3 1282.1 1994.1 1282.1 2002.6zM1265.9 1999.3c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1268.5 1988.7 1265.9 1992 1265.9 1999.3zM1271 2039.7L1271 2039.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2039.7zM1282.1 2101.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1278.5 2087 1282.1 2092.9 1282.1 2101.4zM1265.9 2098c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1268.5 2087.5 1265.9 2090.7 1265.9 2098zM1271 2138.5L1271 2138.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2138.5z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1187.1 1555c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1183.5 1540.7 1187.1 1546.5 1187.1 1555zM1170.9 1551.6c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1173.4 1541.1 1170.9 1544.4 1170.9 1551.6zM1176 1592.1L1176 1592.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1592.1zM1176 1641.4L1176 1641.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1641.4zM1187.1 1703.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1183.5 1688.7 1187.1 1694.6 1187.1 1703.1zM1170.9 1699.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1173.4 1689.2 1170.9 1692.4 1170.9 1699.7zM1187.1 1752.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1183.5 1738.1 1187.1 1743.9 1187.1 1752.4zM1170.9 1749.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1173.4 1738.5 1170.9 1741.8 1170.9 1749.1zM1176 1789.5L1176 1789.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1789.5zM1176 1838.9L1176 1838.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1838.9zM1176 1888.3L1176 1888.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1888.3zM1187.1 1949.9c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1183.5 1935.5 1187.1 1941.4 1187.1 1949.9zM1170.9 1946.5c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1173.4 1936 1170.9 1939.2 1170.9 1946.5zM1187.1 1999.3c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1183.5 1984.9 1187.1 1990.8 1187.1 1999.3zM1170.9 1995.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1173.4 1985.4 1170.9 1988.6 1170.9 1995.9zM1187.1 2048.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.5C1183.5 2034.3 1187.1 2040.1 1187.1 2048.6zM1170.9 2045.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1173.4 2034.7 1170.9 2038 1170.9 2045.2zM1176 2085.7L1176 2085.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2085.7z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M1131.8 1514.1L1131.8 1514.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1514.1zM1131.8 1563.4L1131.8 1563.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1563.4zM1142.9 1625.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1139.3 1610.7 1142.9 1616.6 1142.9 1625.1zM1126.7 1621.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1129.3 1611.2 1126.7 1614.4 1126.7 1621.7zM1131.8 1662.2L1131.8 1662.2l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1662.2zM1131.8 1711.5L1131.8 1711.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1711.5zM1142.9 1773.2c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1139.3 1758.8 1142.9 1764.6 1142.9 1773.2zM1126.7 1769.8c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1129.3 1759.2 1126.7 1762.5 1126.7 1769.8zM1142.9 1822.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1139.3 1808.2 1142.9 1814 1142.9 1822.5zM1126.7 1819.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1129.3 1808.6 1126.7 1811.9 1126.7 1819.1zM1131.8 1859.6L1131.8 1859.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1859.6zM1131.8 1909L1131.8 1909l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1909zM1142.9 1970.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1139.3 1956.3 1142.9 1962.1 1142.9 1970.6zM1126.7 1967.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1129.3 1956.7 1126.7 1959.9 1126.7 1967.2zM1131.8 2007.7L1131.8 2007.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2007.7zM1131.8 2057L1131.8 2057l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2057z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1092.1 1502.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1088.5 1488.2 1092.1 1494.1 1092.1 1502.6zM1075.8 1499.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1078.4 1488.7 1075.8 1491.9 1075.8 1499.2zM1081 1539.7L1081 1539.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1539.7zM1081 1589L1081 1589l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1589zM1092.1 1650.7c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1088.5 1636.3 1092.1 1642.2 1092.1 1650.7zM1075.8 1647.3c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1078.4 1636.8 1075.8 1640 1075.8 1647.3zM1092.1 1700c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1088.5 1685.7 1092.1 1691.5 1092.1 1700zM1075.8 1696.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1078.4 1686.1 1075.8 1689.4 1075.8 1696.7zM1081 1737.1L1081 1737.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1737.1zM1081 1786.5L1081 1786.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1786.5zM1081 1835.8L1081 1835.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1835.8zM1092.1 1897.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1088.5 1883.1 1092.1 1889 1092.1 1897.5zM1075.8 1894.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1078.4 1883.6 1075.8 1886.8 1075.8 1894.1zM1092.1 1946.8c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1088.5 1932.5 1092.1 1938.3 1092.1 1946.8zM1075.8 1943.5c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1078.4 1932.9 1075.8 1936.2 1075.8 1943.5zM1081 1983.9L1081 1983.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1983.9zM1081 2033.3L1081 2033.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V2033.3z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M860.8 1392c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C857.2 1377.7 860.8 1383.5 860.8 1392zM844.5 1388.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C847.1 1378.1 844.5 1381.4 844.5 1388.7zM849.7 1429.1L849.7 1429.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1429.1zM849.7 1478.5L849.7 1478.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1478.5zM860.8 1540.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C857.2 1525.8 860.8 1531.6 860.8 1540.1zM844.5 1536.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C847.1 1526.2 844.5 1529.5 844.5 1536.7zM860.8 1589.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C857.2 1575.1 860.8 1581 860.8 1589.5zM844.5 1586.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C847.1 1575.6 844.5 1578.8 844.5 1586.1zM849.7 1626.6L849.7 1626.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1626.6zM849.7 1675.9L849.7 1675.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1675.9zM849.7 1725.3L849.7 1725.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1725.3zM860.8 1786.9c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C857.2 1772.6 860.8 1778.4 860.8 1786.9zM844.5 1783.5c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C847.1 1773 844.5 1776.3 844.5 1783.5zM849.7 1824L849.7 1824l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1824zM849.7 1873.4L849.7 1873.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1873.4zM860.8 1935c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C857.2 1920.7 860.8 1926.5 860.8 1935zM844.5 1931.6c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C847.1 1921.1 844.5 1924.4 844.5 1931.6z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M1036.8 1465.4L1036.8 1465.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1465.4zM1036.8 1514.7L1036.8 1514.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1514.7zM1047.9 1576.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1044.3 1562 1047.9 1567.9 1047.9 1576.4zM1031.7 1573c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1034.2 1562.5 1031.7 1565.7 1031.7 1573zM1036.8 1613.5L1036.8 1613.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1613.5zM1036.8 1662.8L1036.8 1662.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1662.8zM1047.9 1724.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1044.3 1710.1 1047.9 1716 1047.9 1724.5zM1031.7 1721.1c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1034.2 1710.5 1031.7 1713.8 1031.7 1721.1zM1047.9 1773.8c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C1044.3 1759.5 1047.9 1765.3 1047.9 1773.8zM1031.7 1770.4c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1034.2 1759.9 1031.7 1763.2 1031.7 1770.4zM1036.8 1810.9L1036.8 1810.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1810.9zM1036.8 1860.3L1036.8 1860.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1860.3zM1036.8 1909.6L1036.8 1909.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1909.6zM1036.8 1959L1036.8 1959l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1959zM1047.9 2020.6c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C1044.3 2006.3 1047.9 2012.1 1047.9 2020.6zM1031.7 2017.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C1034.2 2006.7 1031.7 2010 1031.7 2017.2z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M997 1452.3c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C993.5 1437.9 997 1443.8 997 1452.3zM980.8 1448.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C983.4 1438.4 980.8 1441.6 980.8 1448.9zM986 1489.4L986 1489.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1489.4zM986 1538.7L986 1538.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1538.7zM997 1600.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C993.5 1586 997 1591.9 997 1600.4zM980.8 1597c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C983.4 1586.5 980.8 1589.7 980.8 1597zM997 1649.7c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C993.5 1635.4 997 1641.2 997 1649.7zM980.8 1646.3c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C983.4 1635.8 980.8 1639.1 980.8 1646.3zM986 1686.8L986 1686.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1686.8zM986 1736.2L986 1736.2l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1736.2zM986 1785.5L986 1785.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1785.5zM997 1847.2c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C993.5 1832.8 997 1838.7 997 1847.2zM980.8 1843.8c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C983.4 1833.3 980.8 1836.5 980.8 1843.8zM997 1896.5c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C993.5 1882.2 997 1888 997 1896.5zM980.8 1893.2c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C983.4 1882.6 980.8 1885.9 980.8 1893.2zM986 1933.6L986 1933.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1933.6zM986 1983L986 1983l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1983z">
                </path>
                </g><g className='text-focus-in' opacity=".53"><path fill="#fff" d="M941.8 1416L941.8 1416l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1416zM941.8 1465.3L941.8 1465.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1465.3zM952.9 1527c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C949.3 1512.6 952.9 1518.5 952.9 1527zM936.6 1523.6c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C939.2 1513.1 936.6 1516.3 936.6 1523.6zM941.8 1564.1L941.8 1564.1l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1564.1zM941.8 1613.4L941.8 1613.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1613.4zM952.9 1675.1c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C949.3 1660.7 952.9 1666.6 952.9 1675.1zM936.6 1671.7c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C939.2 1661.2 936.6 1664.4 936.6 1671.7zM952.9 1724.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C949.3 1710.1 952.9 1715.9 952.9 1724.4zM936.6 1721c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C939.2 1710.5 936.6 1713.8 936.6 1721zM941.8 1761.5L941.8 1761.5l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1761.5zM941.8 1810.9L941.8 1810.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1810.9zM941.8 1860.2L941.8 1860.2l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1860.2zM941.8 1909.6L941.8 1909.6l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1909.6zM952.9 1971.2c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-9 4.3-12.9 10.4-11.5C949.3 1956.9 952.9 1962.7 952.9 1971.2zM936.6 1967.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C939.2 1957.3 936.6 1960.6 936.6 1967.9z">
                </path>
                </g><g className='fade-in' opacity=".53"><path fill="#fff" d="M889.2 1386.3L889.2 1386.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1386.3zM889.2 1435.7L889.2 1435.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1435.7zM900.3 1497.3c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C896.7 1483 900.3 1488.8 900.3 1497.3zM884.1 1493.9c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C886.6 1483.4 884.1 1486.6 884.1 1493.9zM889.2 1534.4L889.2 1534.4l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1534.4zM889.2 1583.7L889.2 1583.7l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1583.7zM900.3 1645.4c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C896.7 1631 900.3 1636.9 900.3 1645.4zM884.1 1642c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C886.6 1631.5 884.1 1634.7 884.1 1642zM900.3 1694.7c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C896.7 1680.4 900.3 1686.2 900.3 1694.7zM884.1 1691.4c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C886.6 1680.8 884.1 1684.1 884.1 1691.4zM889.2 1731.8L889.2 1731.8l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1731.8zM889.2 1781.2L889.2 1781.2l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1781.2zM900.3 1842.8c0 9.1-3.8 13.2-10.4 11.7-5.8-1.4-9.8-7.2-9.9-16 0-8.9 4.3-12.9 10.4-11.4C896.7 1828.5 900.3 1834.3 900.3 1842.8zM884.1 1839.5c0 6.9 2.4 11.4 6.1 12.3 4.1 1 6.1-2.9 6.1-9.7 0-6.6-1.9-11.3-6.1-12.3C886.6 1828.9 884.1 1832.2 884.1 1839.5zM889.2 1879.9L889.2 1879.9l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1879.9zM889.2 1929.3L889.2 1929.3l-5.3 1.3-.8-2.9 6.5-1.6 3.4.8v26.7l-3.9-.9V1929.3z">
                </path>
                </g></g>
        </svg>
    )
}

export default HeroSvg